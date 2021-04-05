import React, { useState, useRef, ReactElement } from "react";
import { IssueBar } from "./IssueBar";

import "./IssueContainer.css";
import IssueForm from "./IssueForm";

interface Props {
  match: any;
}

export default function IssueContainer({ match }: Props): ReactElement {
  const [expand, updateExpand] = useState(true);

  const expandHandler = (e: any) => {
    updateExpand(!expand);
  };

  let contents = expand ? (
    <div className="folderMargin">
      <IssueForm match={match} />
    </div>
  ) : (
    ""
  );

  return (
    <div>
      <IssueBar expandHandler={expandHandler} expanded={expand} />
      {contents}
    </div>
  );
}
