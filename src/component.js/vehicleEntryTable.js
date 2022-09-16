import React from "react";
import { VehicleEntryEnum } from "../enum";

function VehicleEntryTable() {
  const data = [
    {
      entry_id: "78",
      vehicle_type: 1,
      vehicle_number: "TN68MG1575",
      entry_toll: { toll_id: "432", toll_name: "Madurai" },
      tariff: 1235,
      entry_time: "19/20/2022, 03:50:30",
    },
    {
     entry_id: "72",
     vehicle_type: 1,
     vehicle_number: "TN68MG1575",
     entry_toll: { toll_id: "432", toll_name: "Madurai" },
     tariff: 1235,
     entry_time: "19/20/2022, 03:50:30",
   },
  ];
  return (
    <div style={{ marginTop: "20px" }}>
      <table style={{ width: "100%" }}>
        <tr>
          <th style={{ width: "40%", textAlign: "left", paddingLeft: "20px" }}>
            VEHICLE TYPE
          </th>
          <th>VEHICLE NUMBER</th>
          <th>DATE/TIME</th>
          <th>TOLL NAME</th>
          <th>TARIFF</th>
        </tr>
        {data.map((entry, key) => {
          return (
            <tr key={entry.entry_id}>
              <td
                style={{ width: "40%", textAlign: "left", paddingLeft: "20px" }}
              >
                {VehicleEntryEnum[entry.vehicle_type]}
              </td>
              <td>{entry.vehicle_number}</td>
              <td>{entry.entry_time}</td>
              <td>{entry.entry_toll.toll_name}</td>
              <td>{entry.tariff}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default VehicleEntryTable;
