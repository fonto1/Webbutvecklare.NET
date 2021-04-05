import React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import "./AttachmentsBar.css"
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';

interface Props {
  expandHandler: any;
  expanded: boolean;
}

export const AttachmentsBar = ({expandHandler, expanded }: Props) => {
  const Arrow = () => <Icon iconName= {expanded ?  "ChevronUpMed" : "ChevronDown"}/>;
    
  return (      
    <div className="attachmentsBar" onClick={expandHandler} >
      <div className="leftSide">
        <div className="barIcon"><FontIcon iconName="attach"/> </div>
        <div className="barText">Länkar och bilagor</div>
      </div>
      <div className="rightSide"><Arrow/></div>
    </div>      
    );
};
