import React, { ReactElement, useEffect, useState } from "react";
import Comment from "./Comment";
import "./CommentContainer.css";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { PrimaryButton, DefaultButton } from "office-ui-fabric-react";
import CommentBar from "./CommentBar";
import { useDispatch } from "react-redux";
import { postCommentToIssue } from "../../Redux/Actions/issueAction";
import { getTime } from "../../Services/DatePickerService";
import { getErrorMessage } from "../../Services/IssueFormService";

interface Props {
  match: any;
}

export default function CommentContainer({ match }: Props): ReactElement {
  const dispatch = useDispatch();
  const [expand, updateExpand] = useState(true);
  const stackTokens = { childrenGap: 20 };

  const expandHandler = (e: any) => {
    updateExpand(!expand);
  };

  const [commentField, setCommentField] = useState("");

  const postCommentHandler = async () => {
    const newComment = { name: "Tommy", text: commentField, time: getTime() };
    await dispatch(postCommentToIssue(newComment, match.params.id));
    setCommentField("");
  };

  let contents = expand ? (
    <Stack tokens={stackTokens}>
      <TextField
        placeholder="Skriv en kommentar"
        multiline
        rows={5}
        value={commentField}
        onChange={(e, select: any) => setCommentField(select)}
        disabled={!match.params.id}
        validateOnFocusOut={true}
        onGetErrorMessage={getErrorMessage}
        validateOnLoad={false}
      />
      <Stack horizontal tokens={stackTokens}>
        ¨
        <DefaultButton text="Avbryt" />
        <PrimaryButton text="Lägg till" onClick={postCommentHandler} />
      </Stack>
      <Comment match={match} />
    </Stack>
  ) : (
    ""
  );

  return (
    <Stack tokens={stackTokens}>
      <CommentBar
        match={match}
        expandHandler={expandHandler}
        expanded={expand}
      />
      {contents}
    </Stack>
  );
}
