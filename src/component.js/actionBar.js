import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import filterIcon from "../assets/filter.png";
import { filterToll, searchVehicle } from "../redux/Toll/toll.actions";
import AddToll from "./addToll";
import AddVehicle from "./addVehicle";
import AddVehicleEntry from "./addVehicle";
import CustomButton from "./customButton";
function ActionBar(props) {
  const [addVehicleEntry, setAddVehicleEntry] = useState(false);
  const [tollFilter, setTollFilter] = useState();
  const [searchValue, setSearchValue] = useState();
  const history = useHistory();
  const isTollListPage =window.location.href?.toString()?.includes('toll_list');

  useEffect(() => {
    var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var entryTrigger = document.querySelector(".entry-trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
      setAddVehicleEntry(false);
      modal.classList.toggle("show-modal");
    }
    function entryToggleModal() {
      setAddVehicleEntry(true);
      modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
      if (event.target === modal) {
        if (addVehicleEntry) {
          entryToggleModal();
        } else {
          toggleModal();
        }
      }
    }
    trigger?.addEventListener("click", toggleModal);
    entryTrigger?.addEventListener("click", entryToggleModal);
    closeButton?.addEventListener("click", toggleModal);
    window?.addEventListener("click", windowOnClick);
    return () => {
      trigger?.removeEventListener("click", toggleModal);
      entryTrigger?.removeEventListener("click", entryToggleModal);
      closeButton?.removeEventListener("click", toggleModal);
      window?.removeEventListener("click", windowOnClick);
    };
  });
  const showAddNewToll = () => {
    console.log("called");
  };
  const changeTollFilter = (e) => {
    console.log("tollfilter", e);
    setTollFilter(e);
    props.filterToll(e);
  };
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  
  const changeSearchValue = (text) => {
    if (text?.trim()?.length > 0) {
      console.log("text", text);
      setSearchValue(text);
      props.searchVehicle(text);
    } else {
      setSearchValue();
      props.searchVehicle();
    }
  };
  return (
    <div className="action-container">
      <div style={{ display: "flex", flexDirection: "row" }}>
       {isTollListPage?<div>Tollgate List</div>:<div>Toll entries/Vehicle entries</div>}

        {!isTollListPage && <div
          className="filter-container dropdown"
          style={styles.filterContainer}
        >
          <div className="icon-container">
            <img
              src={filterIcon}
              style={{
                width: "20px",
                height: "20px",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => myFunction()}
              className="filter-icons dropbtn"
              alt="fireSpot"
            />
          </div>
          <div
            id="myDropdown"
            class="dropdown-content"
            style={{ height: "100px", overflowY: "scroll" }}
          >
            {/*          <input type="text" placeholder="Search.." id="myInput" onkeyup={()=>filterFunction()}/>
             */}
            <div
              style={{
                backgroundColor: tollFilter == undefined ? "green" : "white",
              }}
              onClick={() => changeTollFilter()}
            >
              All
            </div>
            {props.tollList.map((toll, index) => (
              <div
                key={index}
                style={{
                  backgroundColor:
                    tollFilter == toll.toll_id ? "green" : "white",
                  cursor: "pointer",
                }}
                onClick={() => changeTollFilter(toll.toll_id)}
              >
                {toll.toll_name}
              </div>
            ))}
          </div>
        </div>}
        <div>
          <div class="wrap">
            <div class="search">
              <input
                type="text"
                class="searchTerm"
                value={searchValue}
                onChange={(e) =>
                  changeSearchValue(e.target.value?.toUpperCase())
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <CustomButton
          className="entry-trigger"
          onClick={() => showAddNewToll()}
        >
          add vehicle entry
        </CustomButton>

        <CustomButton className="trigger" onClick={() => showAddNewToll()}>
          add new toll
        </CustomButton>
        <div>
          <div className="modal">
            <div className="modal-content">
              <span className="close-button">×</span>
              <div className="inner-content">
                {addVehicleEntry ? <AddVehicle /> : <AddToll />}
              </div>
            </div>
          </div>
        </div>
        {isTollListPage?<CustomButton onClick={() => {history.push('/')}}>Back to vehicle logs</CustomButton>:<CustomButton onClick={() => {history.push('/toll_list')}}>toll list</CustomButton>}
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

const mapStateToProps = (state) => {
  return {
    count: state.toll.count,
    entryData: state.toll.entry_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterToll: (e) => dispatch(filterToll(e)),
    searchVehicle: (e) => dispatch(searchVehicle(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
