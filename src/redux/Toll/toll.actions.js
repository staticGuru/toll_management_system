import {  ADDNEWTOLL,NEWVEHICLEENTRY, FILTERTOLL, SEARCHVEHICLE, SEARCHTOLL } from "./toll.types";


export const addNewTollList=(payload) => {
     return {
          type: ADDNEWTOLL,
          payload
     }
}
export const addNewVehicleEntry=(payload) => {
return{
  type: NEWVEHICLEENTRY,
  payload
}
}
export const filterToll=(payload)=>{
  return{
    type:FILTERTOLL,
    payload
  }
}
export const searchVehicle=(payload) => {
  return {
    type: SEARCHVEHICLE,
    payload
  }
}
export const searchToll=(payload) => {
  return{
    type:SEARCHTOLL,
    payload
  }
}