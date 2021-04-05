import React, { ReactElement, useRef, useState, useEffect } from "react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Dropdown, IDropdown } from "office-ui-fabric-react/lib/Dropdown";
import { TextField, ITextField } from "office-ui-fabric-react/lib/TextField";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker } from "office-ui-fabric-react";
import { Link } from "react-router-dom";
import {
  DefaultButton,
  PrimaryButton,
  MessageBar,
  MessageBarType,
} from "office-ui-fabric-react";

import { FontIcon, IInputProps } from "@fluentui/react";
import { postIssue } from "../../Redux/Actions/issueAction";
import DayPickerStrings, {
  controlClass,
} from "../../Services/DatePickerService";

interface Props {
  active: boolean;
}

export default function NewIssueForm({ active }: Props): ReactElement {
  const [disabled, setDisabled] = useState(active);
  const [cardCreated, setCardCreated] = useState(false);
  const stackTokens = { childrenGap: 20 };
  const dispatch = useDispatch();
  const allRows = useSelector((state: any) => state.allRows);

  const options = allRows.map((row: any) => {
    return { key: row.id, text: row.name };
  });

  const dropdownFrom = React.createRef<IDropdown>();
  const dropdownTo = React.createRef<IDropdown>();
  const dropdownManager = React.createRef<IDropdown>();
  const titel = React.createRef<ITextField>();
  const question = React.createRef<ITextField>();

  interface newQ {
    from?: number | string;
    to?: number[];
    status: boolean;
    title?: string;
    manager?: string;
    question?: string;
    comments?: [];
    date?: string;
  }

  const [newQuestion, setNewQuestion] = useState<newQ>({
    from: undefined,
    to: [],
    status: false,
    title: undefined,
    manager: undefined,
    question: undefined,
    comments: [],
    date: undefined,
  });

  const post = async () => {
    await dispatch(postIssue(newQuestion));

    setCardCreated((prev) => !prev);
    setNewQuestion({
      from: "",
      to: [],
      status: false,
      title: "",
      manager: "",
      question: "",
      date: undefined,
      comments: [],
    });
  };

  return (
    <Stack tokens={stackTokens}>
      <Dropdown
        componentRef={dropdownFrom}
        placeholder="Välj diciplin"
        label="Från"
        onChange={(e, select) =>
          setNewQuestion((prev: newQ) => ({ ...prev, from: select?.key }))
        }
        options={options}
        selectedKey={newQuestion.from}
        defaultValue={newQuestion.from}
        required
      />
      <Dropdown
        componentRef={dropdownTo}
        onChange={(e, select: any) =>
          setNewQuestion((prev: any) =>
            prev.to?.includes(select?.key)
              ? {
                  ...prev,
                  to: [
                    ...prev.to.filter((toId: number) => toId !== select?.key),
                  ],
                }
              : { ...prev, to: [...prev.to, select?.key] }
          )
        }
        placeholder="Välj till  diciplin"
        label="Till"
        multiSelect
        options={options}
        selectedKeys={newQuestion.to}
        required
      />
      <Dropdown
        onChange={(e, select) =>
          setNewQuestion((prev: any) => ({ ...prev, manager: select?.key }))
        }
        componentRef={dropdownManager}
        placeholder="Ansvarig"
        label="Ansvarig"
        options={options}
        required
        selectedKey={newQuestion.manager}
      />
      <TextField
        label="Titel"
        placeholder="Titel"
        required
        value={newQuestion.title}
        onChange={(e, select) =>
          setNewQuestion((prev: any) => ({ ...prev, title: select }))
        }
      />
      <TextField
        placeholder="Fråga"
        multiline
        rows={5}
        value={newQuestion.question}
        required
        onChange={(e, select) =>
          setNewQuestion((prev: any) => ({ ...prev, question: select }))
        }
      />
      <TextField placeholder="Svar" multiline rows={5} disabled />
      <DatePicker
        className={controlClass.control}
        strings={DayPickerStrings}
        placeholder="Datum"
        ariaLabel="Select a date"
        label="Svar senast"
      />

      <Stack>
        {cardCreated ? (
          <MessageBar messageBarType={MessageBarType.success}>
            Fråga Skapad
          </MessageBar>
        ) : (
          <MessageBar messageBarType={MessageBarType.info}>
            Skapa din Fråga
          </MessageBar>
        )}
      </Stack>

      <Stack horizontal tokens={stackTokens}>
        <Link to="/">
          <DefaultButton>
            <FontIcon iconName="Back" className="buttonIcon" />
            Tillbaka
          </DefaultButton>
        </Link>

        <PrimaryButton onClick={post}>
          <FontIcon iconName="Save" className="buttonIcon" />
          Spara
        </PrimaryButton>
      </Stack>
    </Stack>
  );
}
