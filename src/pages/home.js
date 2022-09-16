import React from "react";
import ActionBar from "../component.js/actionBar";
import VehicleEntryTable from "../component.js/vehicleEntryTable";

function Home() {
  return (
    <div className="home">
  
      <ActionBar/>
      <VehicleEntryTable/>

    </div>
  );
}

export default Home;
