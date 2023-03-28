import React, { useState } from "react";
import useTypedBrailleStrings from "./useTypedBrailleStrings";

export default function PracticeField({
  question,
  answer,
}: {
  question: String;
  answer: String;
}): JSX.Element {
  const [typedBrailleStrings] = useTypedBrailleStrings();
  const [answering, setAnswering] = useState<number>(0);
  const [correctOrNot, setCorrectOrNot] = useState<String>("不正解");
  const clickedAnswer = () => setAnswering(1);
  function clickedCheck(typedBrailleStrings: String, answer: String): void {
    if (typedBrailleStrings === answer) {
      setCorrectOrNot("正解");
    }
    setAnswering(2);
  }
  if (answering === 0) {
    return (
      <>
        <div>
          {question}
          <button onClick={clickedAnswer}>回答する</button>
        </div>
      </>
    );
  } else if (answering === 1) {
    return (
      <>
        <div>
          {question}
          <button onClick={() => clickedCheck(typedBrailleStrings, answer)}>
            答え合わせをする
          </button>
          <p>{typedBrailleStrings}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <p>
            {" "}
            {correctOrNot}
            {answer}
          </p>
        </div>
      </>
    );
  }
}
