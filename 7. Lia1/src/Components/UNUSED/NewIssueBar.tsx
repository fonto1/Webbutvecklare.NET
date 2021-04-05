import React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import "./NewIssueBar.css"
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';

interface Props {
  expandHandler: any;
  expanded: boolean;
}

export const NewIssueBar = ({expandHandler, expanded }: Props) => {
  const Arrow = () => <Icon iconName= {expanded ?  "CaretSolidUp" : "CaretDownSolid8"}/>;
    
  return (      
    <div className="newIssueBar" onClick={expandHandler} >
      <div className="leftSide">
        <div className="barIcon"><FontIcon iconName="SurveyQuestions"/></div>
        <div className="barText">Fråga</div>
      </div>
      <div className="rightSide"><Arrow/></div>
    </div>      
    );
};
