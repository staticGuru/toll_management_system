import React from "react";
import { connect } from "react-redux";
import { VehicleEntryEnum } from "../enum";
import deleteIcon from "../assets/delete.png";
import { addNewTollList } from "../redux/Toll/toll.actions";
import NoData from "./nodata";
import NoDataFound from "../assets/no_data.jpg";
import NoSearchData from "../assets/no_search_data.jpg";
import capitalizeFirstLetter from "../utils/capitalize";

function TollListPage(props) {
  const deleteToll = (id) => {
    const updatedTollList = props.tollList?.filter((e) => e.toll_id != id);
    props.addNewTollList(updatedTollList);
    localStorage.setItem("_tollList", JSON.stringify([...updatedTollList]));
  };
  return (
    <div style={{ marginTop: "20px" }}>
      {props.tollList?.length == 0 ? (
        <div>
          <NoData
            image={NoDataFound}
            text={'Create the toll gate instance by clicking "Add new toll"'}
          />
        </div>
      ) : props.tollList?.filter(
          (e) =>
            e.toll_name?.toUpperCase()?.includes(props.searchToll) ||
            props.searchToll == undefined
        )?.length == 0 ? (
        <div>
          <NoData image={NoSearchData} />
        </div>
      ) : (
        <table style={{ width: "80%", margin: "auto" }}>
          <tr className="table-header">
            <th
              style={{ width: "40%", textAlign: "left", paddingLeft: "20px" }}
            >
              TOLL NAME
            </th>
            {Object.keys(VehicleEntryEnum).map((key) => (
              <th key={key}>{capitalizeFirstLetter(VehicleEntryEnum[key])}</th>
            ))}
          </tr>
          {props.tollList
            ?.filter(
              (e) =>
                e.toll_name?.toUpperCase()?.includes(props.searchToll) ||
                props.searchToll == undefined
            )
            ?.map((toll, key) => {
              return (
                <tr
                  onMouseOut={() =>
                    (document.getElementById(`delete_${key}`).style.opacity = 0)
                  }
                  onMouseMove={() => {
                    document.getElementById(`delete_${key}`).style.opacity = 1;
                  }}
                  key={toll.toll_id}
                  style={{ cursor: "pointer" }}
                  className="tollListclass"
                >
                  <td
                    style={{
                      width: "40%",
                      textAlign: "left",
                      paddingLeft: "20px",
                      alignItems: "center",
                    }}
                  >
                    <>
                      <img
                        src={deleteIcon}
                        style={{
                          width: "20px",
                          height: "20px",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: 0,
                          marginRight: "10px",
                        }}
                        onClick={() => deleteToll(toll.toll_id)}
                        id={`delete_${key}`}
                        alt="fireSpot"
                      />
                    </>
                    {capitalizeFirstLetter(toll.toll_name)}
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
      )}
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
