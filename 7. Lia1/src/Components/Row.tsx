import React, { ReactElement, useState } from "react";
import "./Row.css";
import Cell from "./Cell";
import RowService from "../Services/RowService";
import { useSelector } from "react-redux";
import { rowInterface } from "../Services/Interface ";

interface Props {
  row: rowInterface;
}

export default function Row({ row }: Props): ReactElement {
  const [expand, updateExpand] = useState(false);
  const allIssues = useSelector((state: any) => state.allIssues);
  const allRows = useSelector((state: any) => state.allRows);

  const expandHandler = (e: any) => {
    updateExpand(!expand);
  };

  return (
    <div className="boardRow" key={row.id}>
      <div
        onClick={expandHandler}
        className={
          expand ? "expandedCol rowText leftRow" : "boardCol rowText leftRow"
        }
        key={Math.random()}
      >
        {row.name}
      </div>
      {allRows.map((to: rowInterface) => (
        <Cell
          questions={RowService.getQuestionsForRow(row.id, to.id, allIssues)}
          expanded={expand}
          key={to.id}
          expandHandler={expandHandler}
        />
      ))}
    </div>
  );
}
