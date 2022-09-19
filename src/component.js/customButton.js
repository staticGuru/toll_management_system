import React, { useEffect } from "react";
import AddToll from "./addToll";

function CustomButton(props) {
  
  return (
    <div
      {...props}
      className="customButton"
      onClick={props.onClick}
      style={{
        padding: "2px 15px",
        backgroundColor: "#5F6F94",
        cursor: "pointer",
        margin: "0px 10px",
        color: "white",
        borderRadius: "12px",
        fontWeight: "bold",
        fontSize: "18px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",display: "flex",
      }}
    >
      {props.children}
      
    </div>
  );
}

export default CustomButton;
