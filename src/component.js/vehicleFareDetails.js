import React, { useState } from 'react'
import DropDown from "./dropdown";
import { VehicleEntryEnum } from "../enum";
function VehicleFareDetails({key}) {
  const [selectedFare, setSelectedFare] = useState([]);
  const changeFare = (e) => {
     // setSelectedFare([...selectedFare,e.target.value]);
   };
  return (

       <div
        
         style={{ display: "flex", flexDirection: "row", flex: 1 }}
       >
         <div style={{ flex: 0.3 }}>
           <DropDown
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
           <input type="number" placeholder="Single journey" />
         </div>
         <div style={{ flex: 0.3 }}>
           <input type="number" placeholder="Return journey" />
         </div>
       </div>
  
  )
}

export default VehicleFareDetails
