import { issueInterface } from "../Services/Interface ";

function getQuestionsForRow(
  fromId: number,
  toId: number,
  questions: issueInterface[]
): issueInterface[] {
  return questions.filter(
    (question: issueInterface) =>
      question.from == fromId && question.to?.includes(toId)
  );
}

const RowService = {
  getQuestionsForRow,
};

export default RowService;
