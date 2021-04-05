const server = "http://localhost:4000/";
import { issueInterface } from "../Services/Interface ";
import { rowInterface } from "../Services/Interface ";

const fetchAllRows = async () => {
  const response = await fetch(server + "Row");
  const allRows: rowInterface[] = await response.json();
  return await allRows;
};

const fetchAllQuestions = async () => {
  const response = await fetch(server + "issue");
  const allQuestions: issueInterface[] = await response.json();
  return await allQuestions;
};

const BoardService = {
  fetchAllRows,
  fetchAllQuestions,
};

export default BoardService;

// let data: any = [];

// const server = "http://localhost:4000"

// const get = async () => {
//   console.log("async here");
//   const fetchedItem = await fetch(server + "/posts");
//   const response = await fetchedItem.json();
//   console.log(response);
// };

// const post = async () => {
//   const user = { id: Math.random(), title: "test", author: "test" };
//   const response = await fetch(server + "/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(user),
//   });
// };

// let loadBoard = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 200);
//   });
// };
