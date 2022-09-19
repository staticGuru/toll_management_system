import React from "react";
import { connect } from "react-redux";
import { VehicleEntryEnum } from "../enum";
import filterIcon from "../assets/filter.png";
import { addNewTollList } from "../redux/Toll/toll.actions";

function TollListPage(props) {
  const deleteToll = (id) => {
    const updatedTollList = props.tollList.filter((e) => e.toll_id != id);
    props.addNewTollList(updatedTollList);
    localStorage.setItem("_tollList", JSON.stringify([...updatedTollList]));
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <table style={{ width: "100%" }}>
        <tr>
          <th style={{ width: "40%", textAlign: "left", paddingLeft: "20px" }}>
            TOLL NAME
          </th>
          {Object.keys(VehicleEntryEnum).map((key) => (
            <th key={key}>{VehicleEntryEnum[key]}</th>
          ))}
        </tr>
        {props.tollList
          .filter(
            (e) =>
              e.toll_name?.toUpperCase()?.includes(props.searchToll) ||
              props.searchToll == undefined
          )
          .map((toll, key) => {
            return (
              <tr
                onMouseOut={() =>
                  (document.getElementById(`delete_${key}`).style.opacity = 0)
                }
                onMouseMove={() =>
                  (document.getElementById(`delete_${key}`).style.opacity = 1)
                }
                key={toll.toll_id}
              >
                <td
                  style={{
                    width: "40%",
                    textAlign: "left",
                    paddingLeft: "20px",
                  }}
                >
                  <>
                    <img
                      src={filterIcon}
                      style={{
                        width: "10px",
                        height: "10px",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                      }}
                      onClick={() => deleteToll(toll.toll_id)}
                      id={`delete_${key}`}
                      alt="fireSpot"
                    />
                  </>
                  {toll.toll_name}
                </td>
                {Object.keys(VehicleEntryEnum).map((key, index) => (
                  <td key={key}>
                    {toll.vehicleFareDetails[key]?.single_journey}/
                    {toll.vehicleFareDetails[key]?.return_journey}
                  </td>
                ))}
              </tr>
            );
          })}
      </table>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    searchToll: state.toll.searchToll,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTollList: (e) => dispatch(addNewTollList(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TollListPage);
