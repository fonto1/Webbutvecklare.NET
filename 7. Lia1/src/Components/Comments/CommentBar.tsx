import React, { ReactElement } from "react";

import { Stack } from "office-ui-fabric-react/lib/Stack";
import "./CommentBar.css";
import { useSelector } from "react-redux";
import Circle from "../Circle";
import { Icon } from "@fluentui/react";

interface Props {
  expandHandler: any;
  expanded: boolean;
  match: any;
}

export default function CommentBar({
  expandHandler,
  expanded,
  match,
}: Props): ReactElement {
  const Arrow = () => (
    <Icon iconName={expanded ? "ChevronUpMed" : "ChevronDown"} />
  );
  const foundIssue = useSelector((state: any) =>
    state.allIssues.find((issue: any) => issue.id == parseInt(match.params.id))
  );

  return (
    <div className="commentBar" onClick={expandHandler}>
      <div className="leftSide">
        <div className="commentIcon">
          <Circle
            text={foundIssue ? foundIssue.comments.length : 0}
            expandHandler={expandHandler}
          />
        </div>
        <div className="barText">Kommentarer</div>
      </div>
      <div className="rightSide">
        <Arrow />
      </div>
    </div>
  );
}
