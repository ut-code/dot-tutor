import React, { useState, useEffect, useRef } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import translateBraille from "@/utils/translateBraille";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RefreshIcon from "@mui/icons-material/Refresh";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TenjiInput from "@/components/TenjiInput";
import { BrailleArray } from "@dot-tutor/braille";
import CommonButton from "@/components/CommonButton";

interface Question {
  question: string;
  answer?: string;
  hint?: string;
}
type QuestionList = Question[];
export const questionList1: QuestionList = [
  { question: "て" },
  { question: "ん" },
  { question: "じ" },
];
export const questionList2: QuestionList = [
  {
    question: "弟は 算数を 習う",
    answer: "おとーとわ　さんすーを　ならう",
    hint: "「弟は」は「オトートワ」と入力します。また、「算数」は「サンスー」と入力します。",
  },
];
export const questionList3: QuestionList = [
  { question: "2023" },
  { question: "9と 4分の3番 線", answer: "9と　4ぶんの3ばん　せん" },
];
export const questionList4: QuestionList = [{ question: "Tokyo" }];
export const questionList5: QuestionList = [
  {
    question: "今日の 天気は、 雨 のち 曇りです。",
    answer: "きょーの　てんきわ、　あめ　のち　くもりです。",
  },
];

export default function Tutorial1({
  questionList,
}: {
  questionList: QuestionList;
}): JSX.Element {
  const [typedBraille, setTypedBraille] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null!);
  const resetInput = () => {
    inputRef.current.value = "";
    setTypedBraille("");
  };
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [goNextQuestion, setGoNextQuestion] = useState<boolean>(false);
  const [translatedBrailleString, setTranslatedBrailleString] =
    useState<string>("");
  useEffect(() => {
    setTranslatedBrailleString(
      translateBraille(
        new BrailleArray((typedBraille.match(/[⠀-⣿]/g) ?? [""]).join(""), 6),
      ),
    );
  }, [typedBraille]);
  useEffect(() => {
    if (questionList !== undefined && questionIndex < questionList.length) {
      if ("answer" in questionList[questionIndex]) {
        setGoNextQuestion(
          translatedBrailleString === questionList[questionIndex].answer,
        );
      } else {
        setGoNextQuestion(
          translatedBrailleString === questionList[questionIndex].question,
        );
      }
    }
  }, [translatedBrailleString, questionIndex, questionList]);
  useEffect(() => {
    setQuestionIndex(0);
  }, [questionList]);

  const sectionClass = "mb-8 rounded pt-3 shadow";
  const sectionTitleClass = "mb-3 ml-3 text-xl font-bold";
  const sectionTextClass = "min-h-24 p-3";

  return (
    <>
      <div className={sectionClass}>
        <p className={sectionTitleClass}>問題</p>
        <hr />
        <p className={sectionTextClass}>
          {questionList !== undefined &&
            (questionIndex >= questionList.length
              ? "すべての問題を解きました！"
              : `「${questionList[questionIndex].question}」を入力してください。`)}
        </p>
      </div>

      <div className={sectionClass}>
        <div className="flex py-1">
          <p className={sectionTitleClass}>点字を入力</p>
          <CommonButton onClick={resetInput}>
            <RefreshIcon />
            リセット
          </CommonButton>
        </div>
        <hr />
        <div className={sectionTextClass}>
          <TenjiInput
            brailleDotCount={6}
            inputRef={inputRef}
            setValue={setTypedBraille}
          />
        </div>
      </div>

      <div className={sectionClass}>
        <p className={sectionTitleClass}>翻訳</p>
        <hr />
        <div className={`flex ${sectionTextClass}`}>
          {translatedBrailleString}
          {goNextQuestion && <CheckCircleOutlineIcon color="success" />}
        </div>
      </div>

      {questionList !== undefined &&
        questionList[questionIndex] !== undefined &&
        questionList[questionIndex].hint !== undefined && (
          <div className={sectionClass}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p className={sectionTitleClass}>ヒント</p>
                <hr />
              </AccordionSummary>
              <AccordionDetails>
                <p className="pl-3">{questionList[questionIndex].hint}</p>
              </AccordionDetails>
            </Accordion>
          </div>
        )}

      <CommonButton
        onClick={() => {
          if (questionList !== undefined) {
            if (questionIndex < questionList.length) {
              setQuestionIndex(questionIndex + 1);
            }
            setGoNextQuestion(false);
          }
          resetInput();
        }}
        disabled={!goNextQuestion}
      >
        次の問題へ
      </CommonButton>
    </>
  );
}
