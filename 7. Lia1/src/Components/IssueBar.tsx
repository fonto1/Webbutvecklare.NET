import React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import "./IssueBar.css";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";

interface Props {
  expandHandler: any;
  expanded: boolean;
}

export const IssueBar = ({ expandHandler, expanded }: Props) => {
  const Arrow = () => (
    <Icon iconName={expanded ? "ChevronUpMed" : "ChevronDown"} />
  );

  return (
    <div className="detailBar" onClick={expandHandler}>
      <div className="leftSide">
        <div className="barIcon">
          <FontIcon iconName="SurveyQuestions" />
        </div>
        <div className="barText">Fråga</div>
      </div>
      <div className="rightSide">
        <Arrow />
      </div>
    </div>
  );
};
