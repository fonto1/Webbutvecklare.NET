import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AttachmentsContainer } from "../../Components/Attachments/AttachmentsContainer";
import { FolderContainer } from "../../Components/Folder/FolderContainer";
import { LogContainer } from "../../Components/Log/LogContainer";
import { fetchIssue } from "../../Redux/Actions/issueAction";
import { fetchRow } from "../../Redux/Actions/rowAction";

import "./NewIssuePage.css";

interface Props {}

export default function NewIssuePage({}: Props): ReactElement {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      await dispatch(fetchRow());
      await dispatch(fetchIssue());
    }
    getData();
    setLoading(false);
  }, []);

  return loading ? (
    <div></div>
  ) : (
    <div className="container-IssuePage">
      <div className="question-info">{/* <NewIssueContainer /> */}</div>
      <div className="comments">
        {/* <CommentContainer tes={text} match={match} /> */}
      </div>
      <div className="folders">
        <FolderContainer />
      </div>
      <div className="attachments">
        <AttachmentsContainer />
      </div>
      <div className="logs">
        <LogContainer />
      </div>
    </div>
  );
}
