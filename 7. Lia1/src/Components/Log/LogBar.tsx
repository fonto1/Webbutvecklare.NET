import React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import "./LogBar.css"
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';

interface Props {
  expandHandler: any;
  expanded: boolean;
}

export const LogBar = ({expandHandler, expanded }: Props) => {
  const Arrow = () => <Icon iconName= {expanded ?  "ChevronUpMed" : "ChevronDown"}/>;
    
  return (      
    <div className="logBar" onClick={expandHandler} >
      <div className="leftSide">
        <div className="barIcon"><FontIcon iconName="ScheduleEventAction"/> </div>
        <div className="barText">Logg</div>
      </div>
      <div className="rightSide"><Arrow/></div>
    </div>      
    );
};
