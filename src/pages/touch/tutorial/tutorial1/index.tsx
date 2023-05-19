import TouchMain from "../../../../components/TouchMain";

export const vowelQuestions = [
  "あい",
  "あう",
  "あお",
  "いう",
  "いえ",
  "おい",
  "おう",
  "おお",
];

export default function Practice1({}): JSX.Element {
  return <TouchMain typeOfQuestions={vowelQuestions} />;
}
