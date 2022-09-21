import React from "react";
import { VehicleEntryEnum } from "../enum";
import { connect } from "react-redux";

import { increaseCounter, decreaseCounter } from "../redux/Toll/toll.actions";
import DateTimeConvertor from "../utils/dateTimeConvertor";
import NoData from "./nodata";
import NoDataFound from "../assets/no_data.jpg";
import NoSearchData from "../assets/no_search_data.jpg";

function VehicleEntryTable(props) {
  return (
    <div style={{ marginTop: "20px" }}>
      {props.entryData?.length == 0 ? (
        <div>
          <NoData
            image={NoDataFound}
            text={
              'To create the toll gate instance, click "Add new toll" and to add the vehicle entry, click "Add vehicle entry"'
            }
          />
        </div>
      ) : (
        props.entryData
            .filter(
              (e) =>
                e.entry_toll.toll_id == props.filterToll ||
                props.filterToll == undefined
            )
            .filter(
              (e) =>
                e.vehicle_number.includes(props.searchVehicle) ||
                props.searchVehicle == undefined
            ).length ==0?<div><NoData
            image={NoSearchData}
            
          /></div>:<table style={{ width: "80%", margin: "auto" }}>
          <tr className="table-header">
            <th
              style={{ width: "40%", textAlign: "left", paddingLeft: "20px" }}
            >
              VEHICLE TYPE
            </th>
            <th>VEHICLE NUMBER</th>
            <th>DATE/TIME</th>
            <th>TOLL NAME</th>
            <th>TARIFF</th>
          </tr>
          {props.entryData
            .filter(
              (e) =>
                e.entry_toll.toll_id == props.filterToll ||
                props.filterToll == undefined
            )
            .filter(
              (e) =>
                e.vehicle_number.includes(props.searchVehicle) ||
                props.searchVehicle == undefined
            )
            .map((entry, key) => {
              return (
                <tr key={entry.entry_id}>
                  <td
                    style={{
                      width: "40%",
                      textAlign: "left",
                      paddingLeft: "20px",
                    }}
                  >
                    {VehicleEntryEnum[entry.vehicle_type]}
                  </td>
                  <td>{entry.vehicle_number}</td>
                  <td>{DateTimeConvertor(entry.entry_datetime)}</td>
                  <td>{entry.entry_toll.toll_name}</td>
                  <td>{entry.tariff}</td>
                </tr>
              );
            })}
        </table>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.toll.count,
    entryData: state.toll.entry_data,
    filterToll: state.toll.filterToll,
    searchVehicle: state.toll.searchVehicle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(VehicleEntryTable);
