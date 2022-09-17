import React from "react";

function DropDown(props) {
  return (
    <select id={props.dropDownId} onChange={(e)=>props.onDropDownChange(e)}>
      {props.options?.map((data, index) => (
        <option key={index} value={data.id}>{data.label}</option>
      ))}
    </select>
  );
}

export default DropDown;
