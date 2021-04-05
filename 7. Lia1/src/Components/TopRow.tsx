import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import "./TopRow.css";
import { rowInterface } from "../Services/Interface ";
import {
  DirectionalHint,
  FontIcon,
  ITooltipHostStyles,
  ITooltipProps,
  TooltipDelay,
  TooltipHost,
} from "@fluentui/react";

interface Props {}

export default function TopRow({}: Props): ReactElement {
  const allRows = useSelector((state: any) => state.allRows);

  return (
    <div className="boardRow">
      <div className="boardCol rowText topLeft"></div>
      {allRows.map((row: rowInterface) => (
        <div className="boardCol rowText topRow" key={row.id}>
          <TooltipHost
            delay={TooltipDelay.zero}
            className="noEvent tooltipList"
            content={row.fullName}
          >
          {row.name}
          </TooltipHost>
        </div>
      ))}
    </div>
  );
}
