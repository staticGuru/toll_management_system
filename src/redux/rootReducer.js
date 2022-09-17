import { combineReducers } from "redux";

import tollReducer from "./Toll/toll.reducers";

const rootReducer = combineReducers({
  toll: tollReducer,
});

export default rootReducer;
