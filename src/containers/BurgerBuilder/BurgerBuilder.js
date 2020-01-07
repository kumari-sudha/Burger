import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends React.Component {
  state = {
    ingrdients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    },
    totalPrice: 4
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingrdients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingrdients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingrdients: updatedIngredients
    });
  };

  removeIngredientHandler = type => {
    const oldCount=this.state.ingrdients[type];
    if(oldCount<=0){
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingrdients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingrdients: updatedIngredients
    });
  }

  render() {
    const disabledInfo={
      ...this.state.ingrdients
    };
    for ( let key in disabledInfo){
      disabledInfo[key]=disabledInfo[key]<=0
    }
    return (
      <Aux>
        <Burger ingrdients={this.state.ingrdients} />
        {/* function called without parenthesis is required when we need 
        function on occurence of an event such as button click etc. */}
        <BuildControls ingredientAdded={this.addIngredientHandler}
        ingredientRemoved={this.removeIngredientHandler} 
        disabled={disabledInfo}
        price={this.state.totalPrice}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
