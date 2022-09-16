import React from "react";

function Layout(props) {
  return (
    <div className="layout">
      <div className="title-container">
        <h1 className="title">Toll management Application</h1>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
