import React from "react";
import "./Layout.css";
import Aux from "../../hoc/Aux";

const layout = props => (
  <Aux>
    <div className="content">Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
