import React from "react";

function NoData({ image, text }) {
  return (
    <div>
      <img
        src={image}
        style={{
          width: "30%",
          height: "30%",
          display: "flex",
          marginRight: "10px",
          alignSelf: "center",
          margin: "auto",
        }}
        alt="search"
      />
      {text && <div style={{ textAlign: "center" }}>{text}</div>}
    </div>
  );
}

export default NoData;
