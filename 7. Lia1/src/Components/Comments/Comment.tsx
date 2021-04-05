import React, { ReactElement } from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import "./Comment.css";
import { useSelector } from "react-redux";
import { commentInterface, issueInterface } from "../../Services/Interface ";

interface comment {
  id: number;
  userId: number;
  text: string;
  date: string;
}

interface Props {
  match: any;
}

export default function Comment({ match }: Props): ReactElement {
  const foundIssue = useSelector((state: any) =>
    state.allIssues.find((issue: any) => issue.id == parseInt(match.params.id))
  );

  const UserProfile = () => <Icon className="userIcon" iconName="Feedback" />;
  return (
    <div>
      {foundIssue
        ? foundIssue.comments.map((comment: any) => {
            return (
              <div
                className="comment"
                key={comment.text + comment.time + Math.random()}
              >
                <div className="profile">
                  <UserProfile />
                </div>
                <div className="commentText">
                  {comment.text}
                  <br></br>
                  <p className="commentAuthor">
                    Tillagd av {comment.name} {comment.time}
                  </p>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}
