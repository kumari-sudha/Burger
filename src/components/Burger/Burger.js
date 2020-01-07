import React from "react";
import "./Burger.css";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";

const burger = props => {
  // object.keys converts an object to array (keys only) then object ...Array() is used to make an array for object values.
  let transformedIngredients = Object.keys(props.ingrdients)
    .map(igKey => {
      return [...Array(props.ingrdients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingrdients!</p>;
  }
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
