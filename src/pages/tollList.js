import React, { useEffect } from "react";
import { connect } from "react-redux";
import ActionBar from "../component.js/actionBar";
import TollListPage from "../component.js/tollListPage";
import { addNewTollList, addNewVehicleEntry } from "../redux/Toll/toll.actions";

function TollList(props) {
     useEffect(() => {
          var _tollList = localStorage.getItem("_tollList");
          var _entryList = localStorage.getItem("_entryList");
          console.log("_lll",JSON.parse(_tollList));
          if (_tollList && props.tollList.length<=0) {
            if(JSON.parse(_tollList).length>0){
            props.addNewTollList(JSON.parse(_tollList));

            }
          }
        if(_entryList && props.vehicleEntryList.length<=0) {
          if(JSON.parse(_entryList).length>0){
            props.addNewVehicleEntry(JSON.parse(_entryList))
          }
         
        }
        }, [props]);
  return (
    <div className="home">
      <ActionBar />
      <div>
      <TollListPage tollList={props.tollList??[]} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    vehicleEntryList: state.toll.entry_data,
    tollList: state.toll.toll_list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewTollList: (e) => dispatch(addNewTollList(e)),
    addNewVehicleEntry: (e) => dispatch(addNewVehicleEntry(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TollList);
