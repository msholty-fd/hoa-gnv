import React from "react";
import "./Hexagon.css";

function Hexagon(props) {
  return (
    <div>
      <div className="hexagon" />
      <div
        style={{
          position: "absolute",
          left: "22px",
          top: "30px"
        }}
      >
        {props.icon}
      </div>
    </div>
  );
}

export default Hexagon;
