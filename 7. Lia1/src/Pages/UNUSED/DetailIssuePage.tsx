import React, { ReactElement, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AttachmentsContainer } from "../../Components/Attachments/AttachmentsContainer";
import CommentContainer from "../../Components/Comments/CommentContainer";
import { FolderContainer } from "../../Components/Folder/FolderContainer";
import { LogContainer } from "../../Components/Log/LogContainer";
import { fetchIssue } from "../../Redux/Actions/issueAction";
import { fetchRow } from "../../Redux/Actions/rowAction";
import "./DetailIssuePage.css";

const server = "http://localhost:4000";

interface Props {
  match?: any;
}

export default function DetailIssuePage({ match }: Props): ReactElement {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      await dispatch(fetchRow());
      await dispatch(fetchIssue());
      await setLoading(false);
    }
    getData();
  }, []);
  const foundIssue = useSelector((state: any) =>
    state.allIssues.find((issue: any) => issue.id == parseInt(match.params.id))
  );
  const allRows = useSelector((state: any) => state.allRows);
  const options = allRows.map((row: any) => {
    return { key: row.id, text: row.name };
  });

  return loading ? (
    <div></div>
  ) : (
    <div className="container-detail">
      <div className="question-info">
        {/* <DetailIssueContainer
          match={match}
          foundIssue={foundIssue}
          options={options}
          active={false}
        /> */}
      </div>
      <div className="comments">
        <CommentContainer match={match} />
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
