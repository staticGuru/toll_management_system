import React, { useEffect } from "react";
import filterIcon from "../assets/filter.png";
import AddToll from "./addToll";
import CustomButton from "./customButton";
function ActionBar() {
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
     const showAddNewToll=()=>{
          console.log("called")
     }
  return (
    <div className="action-container">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>Toll entries/Vehicle entries</div>

        <div className="filter-container" style={styles.filterContainer}>
          <div className="icon-container">
            <img
              src={filterIcon}
              style={{
                width: "20px",
                height: "20px",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="filter-icons"
              alt="fireSpot"
            />
          </div>
        </div>
        <div>
          <div class="wrap">
            <div class="search">
              <input type="text" class="searchTerm" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <CustomButton onClick={() => {}}>add vehicle entry</CustomButton>

        <CustomButton  className="trigger" onClick={() => showAddNewToll()}>add new toll</CustomButton>
        <div>
      <div className="modal">
        <div className="modal-content">
          <span className="close-button">×</span>
          <div className="inner-content"><AddToll/></div>
          </div>
      </div>
      </div>
        <CustomButton onClick={() => {}}>toll list</CustomButton>
      </div>
    </div>
  );
}

const styles = {
  filterContainer: {
    padding: "0px 20px",
    alignItems: "center",
    justifyContent: "center",
  },
};
export default ActionBar;
