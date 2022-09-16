import React, { useEffect } from "react";

function CustomButton(props) {
  useEffect(() => {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
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
      <div  id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
     
      </div>
      </div>
    </div>
  );
}

export default CustomButton;
