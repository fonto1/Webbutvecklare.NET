import React, { isValidElement, ReactElement } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { issueInterface } from "../Services/Interface ";
import {
  DirectionalHint,
  FontIcon,
  ITooltipHostStyles,
  ITooltipProps,
  TooltipDelay,
  TooltipHost,
} from "@fluentui/react";
import DayPickerStrings from "../Services/DatePickerService";

import { useId } from "@uifabric/react-hooks";
import { useSelector } from "react-redux";
import RowService from "../Services/RowService";

import { cardDateFormat, transform } from "../Services/IssueFormService";

interface Props {
  question: issueInterface;
}


export default function Card({ question }: Props): ReactElement {
  const allRows = useSelector((state: any) => state.allRows);
  const from = allRows.find((element: any) => element.id === question.from)
    .name;
  const manager = allRows.find(
    (element: any) => element.id === question.manager
  ).name;

  const to: any = [];
  question.to.map((element: any) => {
    to.push(allRows.find((elements: any) => elements.id === element).name);
  });

  const contentIcons = (
    <div className="iconRow">
        {question.deadline.toString() !== "Invalid Date" ? (
          <div className="iconDate">
            <span>{cardDateFormat(question.deadline)}</span>
          </div>
        ) : (
          ""
        )}
      <div className="iconComment">
        {question.comments.length !== 0 ? <FontIcon iconName="comment" /> : ""}
      </div>
    </div>
  );

  const calloutProps = { gapSpace: 0};
  const tooltipId = useId(question.id.toString());
  const date = transform(question.deadline);
  const tooltipProps: ITooltipProps = {
    onRenderContent: () => (
      <div className="toolTip">

        <span>Från: </span>{from}<br/>
        <span>Till: </span>{to.toString()}<br/>
        <span>Ansvarig: </span>{manager}<br/>
        <span>Titel: </span>{question.title}<br/>
        <span>Fråga: </span>{question.question}<br/>
        <span>Svar: </span>{question.answer}<br/>
        <span>Svar senast: </span>
        {question.deadline.toString() !== "Invalid Date"
          ? transform(question.deadline)
         : ""
        }
      </div>
    ),
  };

  return (
    <TooltipHost
      tooltipProps={tooltipProps}
      directionalHint={DirectionalHint.bottomCenter}
      delay={TooltipDelay.zero}
      id={tooltipId}
      className="noEvent"
      calloutProps={calloutProps}
    >
      <Link className="link" to={`IssuePage/${question.id}`}>
        <div className="cardContainer">
          <div className="grid-item1">      
            <div className="textCard">
                {question.title}
            </div>
          </div>
          <div className="grid-item2">
            <span className={question.status? " dot dotDone" : "dot dotUnDone"}>?</span>
          </div>
          <div className="grid-item3">{contentIcons}</div>  
        </div>
      </Link>
    </TooltipHost>
  );
}
