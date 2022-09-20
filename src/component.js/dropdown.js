import React from "react";

function DropDown(props) {
  return (
    <div style={{width:'100%',marginTop:'10px'}}>
    <select className="select-dropdown" style={{width:'100%'}} id={props.dropDownId} onChange={(e)=>props.onDropDownChange(e)}>
      {props.options?.map((data, index) => (
        <option key={index} value={data.id}>{data.label}</option>
      ))}
    </select>
    </div>
  );
}

export default DropDown;
