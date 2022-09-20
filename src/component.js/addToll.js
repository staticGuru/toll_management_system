import React, { useState } from "react";
import DropDown from "./dropdown";
import { VehicleEntryEnum } from "../enum";
import { connect } from "react-redux";
import { addNewTollList } from "../redux/Toll/toll.actions";
function AddToll(props) {
  const [selectedFare, setSelectedFare] = useState([]);
  const [tollName, setTollName] = useState();
  const changeFare = (e) => {
    // setSelectedFare([...selectedFare,e.target.value]);
  };
  const submitDetails = () => {
    const toll_name = document.querySelector("#toll_name")?.value;
    var vehicleName = document.forms.my_form.vehicleName;

    if (tollName == undefined) {
      window.alert("Please enter toll name");
      document.forms.my_form.tollInputName.focus();
      return false;
    }
    const vehicleFareDetails = Object.fromEntries(
      new Map(
        Object.entries(VehicleEntryEnum).map(([key, val]) => [
          document.querySelector(`#faredropdown_${key}`)?.value,
          {
            single_journey:
              document.querySelector(`#sinjry_${key}`)?.value ?? 0,
            return_journey:
              document.querySelector("#rtnjry_" + key)?.value ?? 0,
          },
        ])
      )
    );
    console.log("faatre", Object.keys(vehicleFareDetails));
    if (
      Object.keys(vehicleFareDetails).length !=
        Object.keys(VehicleEntryEnum).length ||
      Object.keys(vehicleFareDetails).includes("0")
    ) {
      console.log(
        "values",
        Object.values(vehicleFareDetails).filter((e) => e.single_journey == "")
      );

      window.alert("Please select the all vehicle type");
      return false;
    }
    if (
      Object.values(vehicleFareDetails).filter((e) => e.single_journey == "")
        .length > 0 ||
      Object.values(vehicleFareDetails).filter((e) => e.return_journey == "")
        .length > 0
    ) {
      window.alert(
        "Please enter all the single journey and return journey fares"
      );
      return false;
    }
    const details = {
      toll_id: Math.random()?.toString(),
      toll_name,
      vehicleFareDetails,
    };

    props.addNewTollList([...props.tollList, details]);
    localStorage.setItem(
      "_tollList",
      JSON.stringify([...props.tollList, details])
    );
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = "";
    });
    setTollName("");
    const selects = document.querySelectorAll("select");
    selects.forEach((select) => {
      select.value = 0;
    });

    document.querySelector(".modal")?.classList.toggle("show-modal");
  };
  return (
    <div
      style={{
        textAlign: "left",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        style={{ alignSelf: "center", fontWeight: "bold", fontSize: "20px" }}
      >
        Add new Toll
      </div>
      <form name="my_form" action="" id="my_form">
        <div class="required popup-text" style={{ marginBottom: "10px" }}>
          Toll name
        </div>
        <input
          type="text"
          id="toll_name"
          className="toll-name"
          value={tollName}
          name="tollInputName"
          placeholder="Toll name"
          onChange={(e) => setTollName(e.target.value?.trim())}
        />
        <div style={{ marginBottom: "20px" }}>
          <div class="required popup-text">Vehicle fare details</div>
          {Object.keys(VehicleEntryEnum).map((key, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ flex: 0.3 }}>
                <DropDown
                  dropDownId={`faredropdown_${key}`}
                  name={`faredropdownname_${key}`}
                  options={[
                    { id: 0, label: "Select vehicle type" },
                    ...Object.keys(VehicleEntryEnum).map((key) => ({
                      id: key,
                      label: VehicleEntryEnum[key],
                    })),
                  ]}
                  onDropDownChange={(e) => changeFare(e)}
                />
              </div>
              <div style={{ flex: 0.3 }}>
                <input
                  id={`sinjry_${key}`}
                  type="number"
                  className="journey-fare"
                  placeholder="Single journey"
                />
              </div>
              <div style={{ flex: 0.3 }}>
                <input
                  id={`rtnjry_${key}`}
                  type="number"
                  className="journey-fare"
                  placeholder="Return journey"
                />
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "10px",
            backgroundColor: "#5F6F94",
            cursor: "pointer",
            width: "70%",
            alignSelf: "center",
            textAlign: "center",
            margin: "auto",
            padding: "10px",
            borderRadius: 10,
            color: "white",
            fontWeight: "bold",
          }}
          onClick={() => {
            submitDetails();
          }}
        >
          Add details
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    tollList: state.toll.toll_list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTollList: (e) => dispatch(addNewTollList(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddToll);
