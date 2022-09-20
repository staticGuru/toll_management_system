import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { VehicleEntryEnum } from "../enum";
import { addNewVehicleEntry } from "../redux/Toll/toll.actions";
import DropDown from "./dropdown";

function AddVehicle(props) {
  const [toll, setToll] = useState();
  const [vehicleType, setVehicleType] = useState();
  const [vehicleNumber, setVehicleNumber] = useState();
  const [tariff, setTariff] = useState();
  const [vehicleNum, setVehicleNum] = useState();

  const addEntryHandler = () => {
    console.log("called", toll, vehicleType, vehicleNumber, tariff);
    const bodyData = {
      entry_id: Math.random(),
      vehicle_type: vehicleType,
      vehicle_number: vehicleNumber,
      entry_toll: {
        toll_id: toll,
        toll_name: props.tollList.filter((e) => e.toll_id == toll)[0]
          ?.toll_name,
      },

      tariff,
      entry_datetime: new Date(),
    };
    props.addNewVehicleEntry([bodyData, ...props.entryData]);
    setToll();
    setVehicleNumber();
    setVehicleType();
    setTariff();
    setVehicleNum();
    localStorage.setItem('_entryList', JSON.stringify([bodyData, ...props.entryData]));

    document.querySelector(".modal")?.classList.toggle("show-modal");

  };
  function tariffCalculator(amount){
    const isVehiclePassed=props.entryData.filter(e=>(e.entry_toll.toll_id ==toll && e.vehicle_number ==vehicleNumber))
    if(isVehiclePassed.length>0){
       
        const lastCrossedTime =new Date(isVehiclePassed[0]?.entry_datetime)?.getTime() / 1000;
        const reCrossedTime= new Date()?.getTime() / 1000;
        console.log("vppped passed",reCrossedTime-lastCrossedTime);
        if((reCrossedTime-lastCrossedTime) <=3600){
          setTariff(amount.return_journey);
        }else{
          setTariff(amount.single_journey);

        }

    }else{
      console.log("No vehicle passed")
      setTariff(amount.single_journey);

    }
  }
  const findVehicleNumber = () => {
    var amount = props.tollList.filter((e) => e.toll_id == toll)[0]
      ?.vehicleFareDetails[vehicleType];
       tariffCalculator(amount);
    
  };
  useEffect(() => {
    if (toll && vehicleType && vehicleNum) {
      findVehicleNumber();
    }
  }, [toll, vehicleNum, vehicleType]);
  const focusOut = () => {
    const x = document.getElementById("vehicleNumber");
    console.log("dfsd", x.value?.toUpperCase());

    if (x.value) {
      setVehicleNumber(x.value?.toUpperCase());
      setVehicleNum(x.value?.toUpperCase());
    }
  };
  return (
    
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingLeft: "20px",
        paddingRight: "20px",
        // display: "flex",
        // flexDirection: "column",
     
      }}
    >
      <div style={{textAlign: "center",fontWeight: "bold",fontSize: "20px"}}>Add new entry</div>
      <div style={{ textAlign: "left" }}>
        <div className="popup-text required">Select toll name</div>
        <div>
        <div style={{width: "100%"}}>
          <DropDown
            options={[
              { id: 0, label: "Select toll" },
              ...props.tollList?.map((toll) => ({
                id: toll.toll_id,
                label: toll.toll_name,
              })),
            ]}
            dropDownId={"selectToll"}
            onDropDownChange={(e) => setToll(e.target.value)}
          />
          </div>
          <div className="popup-text required">Select vehicle type</div>
          <div>
            <DropDown
              options={[
                { id: 0, label: "Select vehicle type" },
                ...Object.keys(VehicleEntryEnum).map((key) => ({
                  id: key,
                  label: VehicleEntryEnum[key],
                })),
              ]}
              dropDownId={"selectVehicleType"}
              onDropDownChange={(e) => setVehicleType(e.target.value)}
            />
          </div>
          <div className="popup-text required">Vehicle Number</div>
          <div style={{marginTop:'10px'}}>
            <input
              type="text"
              id="vehicleNumber"
              className="input-number"
              value={vehicleNumber}
              onBlur={focusOut}
              placeholder="Enter your vehicle number"
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
          </div>
          <div className="popup-text">Tariff</div>
          <div style={{marginTop:'10px',marginBottom:'20px'}}>
            <input
              type="number"
              placeholder="Tariff amount"
              value={tariff}
              className="input-number"
              disabled
              onChange={(e) => setTariff(e)}
              id="tariff"
            />
          </div>
        </div>
      </div>
      <div
        style={{marginTop:'10px', backgroundColor: "#5F6F94", cursor: "pointer",width:'70%',alignSelf:'center',margin:'auto',padding:'10px',borderRadius:10,color:'white',fontWeight:'bold' }}
        onClick={() => addEntryHandler()}
      >
        Add Entry
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    vehicleEntryList: state.toll.entry_data,
    tollList: state.toll.toll_list,
    entryData: state.toll.entry_data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewVehicleEntry: (e) => dispatch(addNewVehicleEntry(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddVehicle);
