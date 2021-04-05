import React, { useState, useRef } from "react";
import { DefaultButton } from "office-ui-fabric-react";
import { FolderBar } from "./FolderBar";
import "./FolderContainer.css";

export const FolderContainer = () => {
  const [expand, updateExpand] = useState(false);


  const expandHandler = (e: any) => {
    updateExpand(!expand);
  };

  let contents = expand ? (
    <div className="folderMargin">
      <DefaultButton text="Ny fråga" className="buttonBox"/>
      <DefaultButton text="Arbetsmöte" className="buttonBox"/>
      <DefaultButton text="Utgår" className="buttonBox"/>
      <DefaultButton text="För godkännande" className="buttonBox"/>
      <DefaultButton text="Beslutslogg" className="buttonBox"/>
    </div>
  ) : (
    ""
  );

  return (
    <div>
      <FolderBar expandHandler={expandHandler} expanded={expand} />
      {contents}
    </div>
  );
};
