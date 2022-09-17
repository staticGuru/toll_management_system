import React, { useEffect, useState } from "react";
import filterIcon from "../assets/filter.png";
import AddToll from "./addToll";
import CustomButton from "./customButton";
function ActionBar() {
  const [addVehicleEntry,setAddVehicleEntry]=useState(false);
  useEffect(() => {
    var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var entryTrigger = document.querySelector(".entry-trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
      setAddVehicleEntry(false)
      modal.classList.toggle("show-modal");
    }
    function entryToggleModal(){
      setAddVehicleEntry(true);
      modal.classList.toggle("show-modal");

    }

    function windowOnClick(event) {
      if (event.target === modal) {
        if(addVehicleEntry){
          entryToggleModal();
        }else{
          toggleModal();

        }
      }
    }
    trigger?.addEventListener("click", toggleModal);
    entryTrigger?.addEventListener("click",entryToggleModal)
    closeButton?.addEventListener("click", toggleModal);
    window?.addEventListener("click", windowOnClick);
    return()=>{
      trigger?.removeEventListener("click", toggleModal);
      entryTrigger?.removeEventListener("click",entryToggleModal)
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
        <CustomButton className="entry-trigger" onClick={() => showAddNewToll()}>add vehicle entry</CustomButton>

        <CustomButton  className="trigger" onClick={() => showAddNewToll()}>add new toll</CustomButton>
        <div>
      <div className="modal">
        <div className="modal-content">
          <span className="close-button">×</span>
          <div className="inner-content">{addVehicleEntry?"guru":<AddToll/>}</div>
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
