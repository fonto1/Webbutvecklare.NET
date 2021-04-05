import React, { useRef } from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import "./FolderBar.css"
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';

interface Props {
  expandHandler: any;
  expanded: boolean;
}

export const FolderBar = ({expandHandler, expanded }: Props) => {
  const Arrow = () => <Icon iconName= {expanded ?  "ChevronUpMed" : "ChevronDown"}/>;
    
  return (      
    <div className="folderBar" onClick={expandHandler} >
      <div className="leftSide">
        <div className="barIcon"><FontIcon iconName="FabricMovetoFolder"/> </div>
        <div className="barText">Flytta till</div>
      </div>
      <div className="rightSide"><Arrow/></div>
    </div>      
    );
};
