import React, { ReactElement } from "react";
import "./Cell.css";
import Card from "./Card";
import Circle from "./Circle";
import { issueInterface } from "../Services/Interface ";
import { FontIcon } from "@fluentui/react";

interface Props {
  questions: issueInterface[];
  expanded: boolean;
  expandHandler: (e: any) => void;
}

export default function Cell({
  questions,
  expanded,
  expandHandler,
}: Props): ReactElement {
  return (
    <div
      className={expanded ?  
        questions.length !== 0? "cellContainer cellExpand cellColor" :  "cellContainer cellExpand"
        : "cellContainer cell"}
    >
      {expanded? 
          <>
            {questions.length !== 0? <div className="iconExpand"><FontIcon iconName="ChevronUpMed" onClick={expandHandler}/></div>: ""}
            {questions?.map((question: issueInterface) => (
              <Card
                question={question}
                key={question.id}
              />
            ))}
          </>
        : questions.length > 0 && (
            <Circle text={questions.length} expandHandler={expandHandler} />
          )} 
    </div>
  );
}
