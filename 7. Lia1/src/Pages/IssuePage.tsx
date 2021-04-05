import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FolderContainer } from "../Components/Folder/FolderContainer";
import { AttachmentsContainer } from "../Components/Attachments/AttachmentsContainer";
import { LogContainer } from "../Components/Log/LogContainer";

import CommentContainer from "../Components/Comments/CommentContainer";
import IssueContainer from "../Components/IssueContainer";
import "./IssuePage.css";

import { getAllIssues, getIssueById } from "../Redux/Actions/issueAction";
import { getAllRows } from "../Redux/Actions/rowAction";
import { useFetch } from "../Components/useFetch";

interface Props {
  match: any;
}

export default function IssuePage({ match }: Props): ReactElement {
  const { loading } = useFetch([getAllRows(), getAllIssues()]);
  const allRows = useSelector((state: any) => state.allRows);

  return loading ? (
    <div></div>
  ) : (
    <div className="container-detail">
      <div className="question-info">
        <IssueContainer match={match} />
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
