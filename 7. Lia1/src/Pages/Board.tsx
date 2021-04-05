import React, { ReactElement, useEffect, useState } from "react";
import "./Board.css";
import TopRow from "../Components/TopRow";
import Row from "../Components/Row";
import { useDispatch, useSelector } from "react-redux";

import { rowInterface } from "../Services/Interface ";
import { getAllRows } from "../Redux/Actions/rowAction";
import { getAllIssues } from "../Redux/Actions/issueAction";
import { useFetch } from "../Components/useFetch";

interface Props {}

export default function Board({}: Props): ReactElement {
  const { loading } = useFetch([getAllRows(), getAllIssues()]);
  const allRows = useSelector((state: any) => state.allRows);

  return loading ? (
    <div></div>
  ) : (
    <div>
      <TopRow />
      {allRows?.map((row: rowInterface) => (
        <Row
          row={row} // first column(name) of the row
          key={row.id}
        />
      ))}
    </div>
  );
}
