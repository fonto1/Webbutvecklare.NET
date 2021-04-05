import React, { ReactElement, useState } from "react";
import { NewIssueBar } from "./NewIssueBar";
import "./NewIssueContainer.css";
import NewIssueForm from "./NewIssueForm";

interface Props {
  active: boolean;
}

export default function NewIssueContainer({ active }: Props): ReactElement {
  const [expand, updateExpand] = useState(true);

  const expandHandler = (e: any) => {
    updateExpand(!expand);
  };

  let contents = expand ? (
    <div className="folderMargin">
      <NewIssueForm active={active} />
    </div>
  ) : (
    ""
  );

  return (
    <div>
      <NewIssueBar expandHandler={expandHandler} expanded={expand} />
      {contents}
    </div>
  );
}
