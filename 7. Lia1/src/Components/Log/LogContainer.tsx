import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { LogBar } from "./LogBar";
import "./LogContainer.css";



export const LogContainer = () => {
  const [expand, updateExpand] = useState(false);


  const expandHandler = (e: any) => {
    updateExpand(!expand);
  };

  let contents = expand ? (
    <div className="folderMargin">
      <h5>Händelser</h5>
    </div>
  ) : (
    ""
  );

  return (
    <div>
      <LogBar expandHandler={expandHandler} expanded={expand} />
      {contents}
    </div>
  );
};
