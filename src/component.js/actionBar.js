import React from "react";
import filterIcon from "../assets/filter.png";
import CustomButton from "./customButton";
function ActionBar() {
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

        <CustomButton  className="trigger" id="myBtn" onClick={() => showAddNewToll()}>add new toll</CustomButton>
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
