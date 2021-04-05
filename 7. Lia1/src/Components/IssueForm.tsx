import React, { ReactElement, useState, useEffect } from "react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker } from "office-ui-fabric-react";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react";

import DayPickerStrings, {
  controlClass,
  getTime,
} from "../Services/DatePickerService";

import "./IssueForm.css";
import { postAnswerToIssue, postNewIssue } from "../Redux/Actions/issueAction";
import {
  DayOfWeek,
  FontIcon,
  IStackProps,
  Label,
  MessageBar,
  MessageBarType,
} from "@fluentui/react";
import {
  dateFieldFormatDate,
  getErrorMessage,
} from "../Services/IssueFormService";
import { newQ } from "../Services/Interface ";

interface Props {
  match: any;
}

export default function IssueForm({ match }: Props): ReactElement {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const getIssue = useSelector((state: any) =>
    state.allIssues.find((issue: any) => issue.id == parseInt(match.params.id))
  );

  const [enableAnswerButton, setEnableAnswerButton] = useState(true);
  const [enableNewIssueButton, setenableNewIssueButton] = useState(true);
  const [foundIssue, setFoundIssue] = useState<any>(getIssue);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState<any>();
  const allRows = useSelector((state: any) => state.allRows);
  const options = allRows.map((row: any) => {
    return { key: row.id, text: row.name };
  });

  useEffect(() => {
    checkPage();
    setLoading(false);
    return () => {
      setFoundIssue("");
    };
  }, []);

  const checkPage = () => {
    if (id && !foundIssue) {
      history.push("/error");
    }
  };

  useEffect(() => {
    setFoundIssue(getIssue);
  }, [getIssue]);

  const [newQuestion, setNewQuestion] = useState<newQ>({
    from: "",
    to: [],
    status: false,
    title: "",
    manager: "",
    question: "",
    comments: [],
    date: "",
    deadline: "",
    createdTime: "",
    answer: "",
  });

  useEffect(() => {
    issueFormButtonChecker();
  }, [newQuestion]);

  useEffect(() => {
    answerFormChecker();
  }, [foundIssue]);

  //Formstyling with Stack
  const stackTokens = { childrenGap: 10 };
  const widthSmall = { maxWidth: 350 };
  const widthLarge = { maxWidth: 650 };

  //MessageBars
  // const [showMessageError, setShowMessageError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const post = async () => {
    if (foundIssue) {
      await dispatch(postAnswerToIssue(foundIssue.answer, match.params.id)); //detailpage
      history.push("/");
    } else {
      //create new Issue
      // Show || hide messagebars
      if (newQuestion.title === "") {
        // setShowMessageError(true); //validate?
      } else {
        // setShowMessageError(false); //onsuccess
        setShowSuccess(true);
        setTimeout(function () {
          setShowSuccess(false);
        }, 3000);
      }
      newQuestion.createdTime = getTime();
      await dispatch(postNewIssue(newQuestion));
      setNewQuestion({
        from: "",
        to: [],
        status: false,
        title: "",
        manager: "",
        question: "",
        date: undefined,
        comments: [],
        deadline: "",
        createdTime: "",
        answer: "",
      });
    }
  };

  // const ErrorValidation = () => (
  //   <MessageBar messageBarType={MessageBarType.error}>
  //     Formuläret är inte korrekt ifyllt.
  //   </MessageBar>
  // );

  const issueFormButtonChecker = () => {
    if (
      newQuestion.from &&
      newQuestion.to?.length !== 0 &&
      newQuestion.manager &&
      newQuestion.question &&
      newQuestion.title
    ) {
      setenableNewIssueButton(false);
    } else {
      setenableNewIssueButton(true);
    }
  };

  const answerFormChecker = () => {
    if (foundIssue)
      if (foundIssue.answer) {
        setEnableAnswerButton(false);
      } else {
        setEnableAnswerButton(true);
      }
  };

  const SuccessMessage = () => (
    <MessageBar messageBarType={MessageBarType.success}>
      Frågan är skapad.
    </MessageBar>
  );

  return loading ? (
    <div></div>
  ) : (
    <div>
      <Stack tokens={stackTokens}>
        <Stack>
          {/* {showMessageError && <ErrorValidation />} */}
          {showSuccess && <SuccessMessage />}
        </Stack>
        <Stack tokens={widthSmall}>
          <Dropdown
            placeholder="Välj diciplin"
            label="Från"
            onChange={(e, select) =>
              setNewQuestion((prev: any) => ({ ...prev, from: select?.key }))
            }
            options={options}
            selectedKey={foundIssue ? foundIssue.from : newQuestion.from}
            defaultValue={newQuestion.from}
            disabled={foundIssue}
            required={true}
          />
          <Dropdown
            onChange={(e, select) =>
              setNewQuestion((prev: any) => ({
                ...prev,
                to: prev.to.includes(select?.key)
                  ? [...prev.to.filter((toId: any) => toId !== select?.key)]
                  : [...prev.to, select?.key],
              }))
            }
            placeholder="Välj till  diciplin"
            label="Till"
            multiSelect
            options={options}
            selectedKeys={foundIssue ? foundIssue.to : newQuestion.to}
            disabled={foundIssue}
            required
          />
          <Dropdown
            onChange={(e, select) =>
              setNewQuestion((prev: any) => ({ ...prev, manager: select?.key }))
            }
            placeholder="Ansvarig"
            label="Ansvarig"
            options={options}
            selectedKey={foundIssue ? foundIssue.manager : newQuestion.manager}
            disabled={foundIssue}
            required
          />
        </Stack>
        <Stack tokens={widthLarge}>
          <TextField
            label="Titel"
            placeholder="Titel"
            required
            value={foundIssue ? foundIssue.title : newQuestion.title}
            onChange={(e, select) =>
              setNewQuestion((prev: any) => ({ ...prev, title: select }))
            }
            disabled={foundIssue}
            validateOnFocusOut={true}
            onGetErrorMessage={getErrorMessage}
            validateOnLoad={false}
          />
          <TextField
            placeholder="Fråga"
            value={foundIssue ? foundIssue.question : newQuestion.question}
            multiline
            rows={5}
            label="Fråga"
            onChange={(e, select) =>
              setNewQuestion((prev: any) => ({ ...prev, question: select }))
            }
            disabled={foundIssue}
            validateOnFocusOut={true}
            onGetErrorMessage={getErrorMessage}
            validateOnLoad={false}
            required={true}
          />
          <TextField
            placeholder="Svar"
            value={foundIssue ? foundIssue.answer : newQuestion.answer}
            multiline
            rows={5}
            label="Svar"
            onChange={(e, select) =>
              setFoundIssue((prev: any) => ({ ...prev, answer: select }))
            }
            disabled={!foundIssue}
            // validateOnFocusOut={true}
            // onGetErrorMessage={getErrorMessage}
            // validateOnLoad={false}
          />

          <DatePicker
            className={controlClass.control}
            label="Svar senast"
            firstDayOfWeek={DayOfWeek.Monday}
            strings={DayPickerStrings}
            placeholder="Datum"
            ariaLabel="Select a date"
            disabled={foundIssue}
            showWeekNumbers={true}
            firstWeekOfYear={1}
            showMonthPickerAsOverlay={true}
            value={
              foundIssue && foundIssue.deadline.toString() !== "Invalid Date"
                ? foundIssue.deadline
                : newQuestion.deadline
            }
            formatDate={dateFieldFormatDate}
            onSelectDate={(date) => {
              console.log(date);
              setNewQuestion((prev: any) => ({
                ...prev,
                deadline: date,
              }));
            }}
          />

          <Stack horizontal tokens={stackTokens}>
            <Link to="/">
              <DefaultButton>
                <FontIcon iconName="Back" className="buttonIcon" />
                Tillbaka
              </DefaultButton>
            </Link>

            <PrimaryButton
              onClick={post}
              disabled={foundIssue ? enableAnswerButton : enableNewIssueButton}
            >
              <FontIcon iconName="Save" className="buttonIcon" />
              Spara
            </PrimaryButton>
          </Stack>
        </Stack>
      </Stack>
      <div className="createdDate">
        {foundIssue ? `Skapad: ${foundIssue.createdTime}` : ""}
      </div>
    </div>
  );
}
