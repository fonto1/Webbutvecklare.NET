import React, { ReactElement } from "react";

import { Text } from "office-ui-fabric-react/lib/Text";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import img from "../error.jpg";
import { Link } from "react-router-dom";
import { DefaultButton, FontIcon } from "@fluentui/react";

interface Props {}

export default function ErrorPage({}: Props): ReactElement {
  const stackTokens = { childrenGap: 10 };
  return (
    <div>
      <h1>Ohh No</h1>
      <p>Seems like there is a problem with the page</p>
      <Stack horizontal tokens={stackTokens}>
        <Link to="/">
          <DefaultButton>
            <FontIcon iconName="BuildIssue" className="buttonIcon" />
            Rebuild Page
          </DefaultButton>
        </Link>
      </Stack>
      <br></br>
    </div>
  );
}
