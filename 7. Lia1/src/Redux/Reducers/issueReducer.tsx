import { issueInterface } from "../../Services/Interface ";

const allIssuess: issueInterface[] = [];

const issueReducer = (state = allIssuess, action: any) => {
  switch (action.type) {
    case "SET_ALL_ISSUES":
      return action.payload;

    case "SET_ISSUE_BY_ID":
      return action.payload;

    case "ADD_NEW_ISSUE":
      return [...state, action.payload];

    case "UPDATE_ISSUE":
      const newAllIssue = [...state];
      const index = newAllIssue.findIndex((obj) => obj.id == action.payload.id);
      newAllIssue[index] = action.payload;
      console.log(newAllIssue);
      return newAllIssue;
    default:
      return state;
  }
};

export default issueReducer;
