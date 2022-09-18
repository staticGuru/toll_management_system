import { INCREMENT, DECREMENT, ADDNEWTOLL,NEWVEHICLEENTRY } from "./toll.types";

export const increaseCounter = (payload) => {
  return {
    type: INCREMENT,
    payload
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};
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