import React from "react";
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
class BurgerBuilder extends React.Component {

  state={
    ingrdients:{
      salad:1,
      bacon:1,
      cheese:5,
      meat:2
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingrdients={this.state.ingrdients}/>
        <BuildControls/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
