import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AttachmentsBar } from "./AttachmentsBar";
import "./AttachmentsContainer.css";



export const AttachmentsContainer = () => {
  const [expand, updateExpand] = useState(false);


  const expandHandler = (e: any) => {
    updateExpand(!expand);
  };


  return (
    <div>
      <AttachmentsBar expandHandler={expandHandler} expanded={expand} />
      {expand ? 
        <div className="folderMargin"></div>
        :  ""}
    </div>
  );
};
