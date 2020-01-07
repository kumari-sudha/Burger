import React from "react";
import "./BuildControl.css";
const buildControl = props => {
  return (
    <div className="buildControl">
      <div className="label">{props.label}</div>
      <button className="Less">Less</button>
      <button className="More">More</button>
    </div>
  );
};

export default buildControl;
