import React, { useEffect } from "react";
import AddToll from "./addToll";

function CustomButton(props) {
  
  return (
    <div
      {...props}
      onClick={props.onClick}
      style={{
        padding: "2px 10px",
        backgroundColor: "blue",
        cursor: "pointer",
        margin: "0px 10px",
        color: "white",
      }}
    >
      {props.children}
      
    </div>
  );
}

export default CustomButton;
