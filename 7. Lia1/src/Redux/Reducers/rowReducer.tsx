import { rowInterface } from "../../Services/Interface ";

const allRows: rowInterface[] = [];

const rowReducer = (state = allRows, action: any) => {
  switch (action.type) {
    case "SET_ALL_ROWS":
      return action.payload;
    default:
      return state;
  }
};

export default rowReducer;
