


import { INCREMENT, DECREMENT, ADDNEWTOLL } from './toll.types';


const INITIAL_STATE = {

    count: 0,
    entry_data:[ {
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
   },],
   toll_list:[]
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

    }

};

export default reducer;