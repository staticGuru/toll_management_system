import React, { useEffect } from "react";
import AddToll from "./addToll";

function CustomButton(props) {
  useEffect(() => {
    var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
      modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
      if (event.target === modal) {
        toggleModal();
      }
    }
    trigger?.addEventListener("click", toggleModal);
    closeButton?.addEventListener("click", toggleModal);
    window?.addEventListener("click", windowOnClick);
    return()=>{
      trigger?.removeEventListener("click", toggleModal);
    closeButton?.removeEventListener("click", toggleModal);
    window?.removeEventListener("click", windowOnClick);
    }
  });
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
      <div>
      <div className="modal">
        <div className="modal-content">
          <span className="close-button">×</span>
          <div className="inner-content">guru</div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default CustomButton;
