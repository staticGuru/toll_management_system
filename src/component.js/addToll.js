import React, { useState } from "react";
import DropDown from "./dropdown";
import { VehicleEntryEnum } from "../enum";
function AddToll() {
  const [selectedFare, setSelectedFare] = useState([]);
  const [tollName, setTollName] = useState();
  const changeFare = (e) => {
    // setSelectedFare([...selectedFare,e.target.value]);
  };
  const submitDetails = () => {
    const toll_name = document.querySelector("#toll_name")?.value;

    const vehicleFareDetails = Object.fromEntries(new Map(
      Object.entries(VehicleEntryEnum).map(([key, val]) => [
        document.querySelector(`#faredropdown_${key}`)?.value,
        {
          single_journey: document.querySelector(`#sinjry_${key}`)?.value ?? 0,
          return_journey: document.querySelector("#rtnjry_" + key)?.value ?? 0,
        },
      ])
    ));
    const details = {
      toll_id: Math.random()?.toString(),
      toll_name,
      vehicleFareDetails,
    };

    console.log("details", details);
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
      <div class="required">Toll name</div>
      <input
        type="text"
        id="toll_name"
        value={tollName}
        placeholder="Toll name"
        onChange={(e) => setTollName(e.target.value)}
      />
      <div>
        <div class="required">Vehicle fare details</div>
        {Object.keys(VehicleEntryEnum).map((key, index) => (
          <div
            key={index}
            style={{ display: "flex", flexDirection: "row", flex: 1 }}
          >
            <div style={{ flex: 0.3 }}>
              <DropDown
                dropDownId={`faredropdown_${key}`}
                options={[
                  { id: 0, label: "Select vehicle type" },
                  ...Object.keys(VehicleEntryEnum)
                    .filter((key) => !selectedFare.includes(key))
                    .map((key) => ({
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
                placeholder="Single journey"
              />
            </div>
            <div style={{ flex: 0.3 }}>
              <input
                id={`rtnjry_${key}`}
                type="number"
                placeholder="Return journey"
              />
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          backgroundColor: "blue",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          submitDetails();
        }}
      >
        add details
      </div>
    </div>
  );
}

export default AddToll;
