import React, { ReactElement } from "react";
import "./CellToolbar.css";
import { Icon } from "@fluentui/react/lib/Icon";

interface Props {
  currentTool: any;
}

export default function CellToolbar({ currentTool }: Props): ReactElement {
  const Add = () => <Icon iconName="CirclePlus" />;
  const List = () => <Icon iconName="BulletedList" />;

  return (
    <div className="cellToolbar" ref={currentTool}>
      <div className="tools">
        <Add />
      </div>
      <div className="tools">
        <List />
      </div>
    </div>
  );
}
