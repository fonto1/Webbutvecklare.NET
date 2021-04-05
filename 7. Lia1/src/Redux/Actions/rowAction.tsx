export const getAllRows = () => {
  return async (dispatch: any) => {
    const response = await fetch("http://localhost:4000/row");
    const data = await response.json();
    dispatch({ type: "SET_ALL_ROWS", payload: data });
  };
};
