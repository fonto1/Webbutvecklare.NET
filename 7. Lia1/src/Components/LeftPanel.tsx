import React, { ReactElement } from "react";
import "./LeftPanel.css";
import { Icon } from "@fluentui/react/lib/Icon";
import { Link } from "react-router-dom";
import {
  DirectionalHint,
  FontIcon,
  ITooltipHostStyles,
  ITooltipProps,
  TooltipDelay,
  TooltipHost,
} from "@fluentui/react";

interface Props {}

export default function LeftPanel({}: Props): ReactElement {
  const BoardIcon = () => (
    <Icon iconName="GridViewSmall" className="boardIcon" />
  );
  const Add = () => (
    <Icon iconName="CircleAddition" className="addIcon" />
  );
  const List = () => (
    <Icon iconName="NumberedList" className="listIcon" />
  );


  const calloutProps = { gapSpace: 0,  isBeakVisible: false };
  const tooltipProps: ITooltipProps = {
    onRenderContent: () => (
      <div className="tooltipList">
        Lanseras inom kort!
      </div>
    ),
  };

  return (
    <div className="left-panel-container">
      <div className="menu">
        <div className="colorBox"></div>
        <div className="addBox">
          {" "}
          <Link to="/IssuePage/">
            <Add />
          </Link>
        </div>
        <div className="boardIconBox">
          <Link to="/">
            {" "}
            <BoardIcon />
          </Link>
        </div>
        <div className="listBox">
          <TooltipHost
            tooltipProps={tooltipProps}
            delay={TooltipDelay.zero}
            className="noEvent tooltipList"
            calloutProps={calloutProps}
          >
            {" "}
            <Link to="/">
              <List />
            </Link>
          </TooltipHost>
        </div>
      </div>
    </div>
  );
}
