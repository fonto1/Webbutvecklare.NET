export const getAllIssues = () => {
  return async (dispatch: any) => {
    const response = await fetch("http://localhost:4000/issue");
    let data = await response.json();
    data = data.map((issue: any) => ({
      ...issue,
      deadline: new Date(issue.deadline),
    }));

    dispatch({ type: "SET_ALL_ISSUES", payload: data });
  };
};

export const getIssueById = (id: any) => {
  return async (dispatch: any) => {
    const response = await fetch(`http://localhost:4000/issue/${id}`);
    const data = await response.json();
    dispatch({ type: "SET_ISSUE_BY_ID", payload: data });
  };
};

export const postNewIssue = (data: any) => {
  return async (dispatch: any) => {
    const response = await fetch("http://localhost:4000/issue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const newQuestion = await response.json();
    dispatch({ type: "ADD_NEW_ISSUE", payload: newQuestion });
  };
};

export const postCommentToIssue = (data: any, id: number) => {
  return async (dispatch: any) => {
    const response = await fetch(`http://localhost:4000/Issue/${id}`);
    const issue = await response.json();
    issue.comments.push(data);

    const responseIssue = await fetch(`http://localhost:4000/Issue/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(issue),
    });
    let newUpdatedIssue = await responseIssue.json();
    newUpdatedIssue.deadline = new Date(newUpdatedIssue.deadline);
    dispatch({ type: "UPDATE_ISSUE", payload: newUpdatedIssue });
  };
};

export const postAnswerToIssue = (data: any, id: number) => {
  return async (dispatch: any) => {
    const response = await fetch(`http://localhost:4000/Issue/${id}`);
    const issue = await response.json();

    issue.answer = data;
    issue.status = true;

    const responseIssue = await fetch(`http://localhost:4000/Issue/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(issue),
    });

    const newUpdatedIssue = await responseIssue.json();
    newUpdatedIssue.deadline = new Date(newUpdatedIssue.deadline);

    dispatch({ type: "UPDATE_ISSUE", payload: newUpdatedIssue });
  };
};
