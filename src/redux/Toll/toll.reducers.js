


import { INCREMENT, DECREMENT, ADDNEWTOLL,NEWVEHICLEENTRY, FILTERTOLL, SEARCHVEHICLE, SEARCHTOLL } from './toll.types';


const INITIAL_STATE = {

    count: 0,
    entry_data:[],
   toll_list:[],
   filterToll:undefined,
   searchVehicle:undefined,
   searchToll:undefined,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case INCREMENT:

           return {

             ...state, count: state.count + 1,

           };

        case DECREMENT:

           return {
              ...state, count: state.count - 1,

           };
       case ADDNEWTOLL:
            return{
               ...state, toll_list: action.payload
            }
         default: return state;
       case NEWVEHICLEENTRY:
         return{
            ...state,entry_data:action.payload
         }
       case FILTERTOLL:
          return{
            ...state,filterToll:action.payload
          }
       case SEARCHVEHICLE:
           return{
            ...state,searchVehicle:action.payload
           }
       case SEARCHTOLL:
           return{
            ...state,searchToll:action.payload
           }
    }

};

export default reducer;