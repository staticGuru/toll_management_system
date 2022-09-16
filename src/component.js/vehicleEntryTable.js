import React from 'react'

function VehicleEntryTable() {
     const data = [
          { name: "Anom", age: 19, gender: "Male" },
          { name: "Megha", age: 19, gender: "Female" },
          { name: "Subham", age: 25, gender: "Male"},
        ]
  return (
    <div style={{marginTop:'20px'}}>
    <table style={{width: '100%'}}>
    <tr>
      <th style={{width:'40%',textAlign:'left',paddingLeft:'20px'}}>VEHICLE TYPE</th>
      <th>VEHICLE NUMBER</th>
      <th>DATE/TIME</th>
      <th>TOLL NAME</th>
      <th>TARIFF</th>
    </tr>
    {data.map((val, key) => {
      return (
        <tr key={key}>
          <td style={{width:'40%',textAlign:'left',paddingLeft:'20px'}}>{val.name}</td>
          <td>{val.age}</td>
          <td>{val.gender}</td>
        </tr>
      )
    })}
  </table>
    </div>
  )
}

export default VehicleEntryTable