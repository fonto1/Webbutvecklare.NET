import React, { ReactElement } from "react";

interface Props {
  text: number;
  expandHandler: (e: any) => void;
}

export default function Circle({ text, expandHandler }: Props): ReactElement {
  return (
    <span className="dotCell" onClick={expandHandler}>
      {text}
    </span>
  );
}
