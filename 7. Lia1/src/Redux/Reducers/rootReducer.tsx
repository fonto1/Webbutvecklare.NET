import { combineReducers } from "redux";
import rowReducer from "./rowReducer";
import issueReducer from "./issueReducer";

const rootReducer = combineReducers({
  allRows: rowReducer,
  allIssues: issueReducer,
});

export default rootReducer;
