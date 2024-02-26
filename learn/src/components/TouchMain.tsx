import React, { useEffect, useState } from "react";
import translateBraille from "@/utils/translateBraille";
import { judge, eightJudge, makeQuestion } from "@/components/QuestionAndJudge";
import EdittableBraille from "@/components/EdittableBraille";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import * as tenji from "tenji";
import { BrailleArray } from "@dot-tutor/braille";
import HiraganaTableDialog from "./HiraganaTableDialog";

export default function TouchMain({
  typeOfQuestions,
  brailleDotCount,
}: {
  typeOfQuestions: string[];
  brailleDotCount: 6 | 8;
}): JSX.Element {
  const [brailleStrings, setBrailleStrings] = useState<BrailleArray>(
    new BrailleArray([...Array(10)].map((_) => "⠀").join(""), brailleDotCount),
  );
  const [hiraganaStrings, setHiraganaStrings] = useState<string>("");
  const [question, setQuestion] = useState<string>(typeOfQuestions[0]); // 問題
  const [rightOrWrong, judgeAnswer] = useState<boolean>(false); // 正誤
  const [afterJudgeAnswer, setAfterJudgeAnswer] = useState<boolean>(false); // 正誤
  const [showBrailleChart, setShowBrailleChart] = useState<boolean>(false);

  useEffect(() => {
    setHiraganaStrings(
      brailleDotCount === 6
        ? translateBraille(brailleStrings)
        : tenji.fromTenji(
            brailleStrings.map((braille) => braille.getCharacter()).join(""),
            { kanji: true },
          ),
    );
  }, [brailleDotCount, brailleStrings]);

  useEffect(() => {
    judgeAnswer(
      brailleDotCount === 6
        ? judge(brailleStrings, question)
        : eightJudge(brailleStrings, question),
    );
  }, [brailleDotCount, brailleStrings, question]);

  return (
    <>
      <div
        className={`float-left my-auto mt-40 ${showBrailleChart ? "w-3/4" : "w-full"}`}
      >
        <div className="w-200 mx-auto mt-auto max-w-full pb-1.5 pt-2 font-sans text-3xl font-bold">
          「{question}」を点字に直してください。
        </div>
        <div className="w-200 mx-auto flex max-w-full flex-wrap pb-1.5 pt-2">
          {brailleStrings.map((brailleChar, i) => (
            <EdittableBraille
              key={i}
              height="150"
              width="90"
              braille={brailleChar}
              setBraille={(braille) => {
                setBrailleStrings(
                  new BrailleArray(
                    brailleStrings.map((_, j) => (j === i ? braille : _)),
                  ),
                );
              }}
            />
          ))}
        </div>

        <div className="w-200 h-15 mx-auto flex max-w-full">
          {(() => {
            if (afterJudgeAnswer === true && rightOrWrong === true) {
              return (
                <div className="flex basis-3/4">
                  <CheckCircleOutlineIcon className="my-auto pl-5 text-6xl" />
                  <p className="my-auto pl-2.5 font-sans text-3xl font-bold">
                    正解!!
                  </p>
                </div>
              );
            }
            if (afterJudgeAnswer === true && rightOrWrong === false) {
              return (
                <div className="flex basis-3/4">
                  <CancelOutlinedIcon className="my-auto pl-5 text-6xl" />
                  <p className="my-auto pl-2.5 font-sans text-3xl font-bold">
                    不正解
                  </p>
                </div>
              );
            }
            return <div className="flex basis-3/4"> </div>;
          })()}
          {(() => {
            if (afterJudgeAnswer === true) {
              return (
                <div className="flex basis-1/4 justify-center">
                  <button
                    className="mb-2 me-2 rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                    type="button"
                    onClick={() => {
                      setQuestion(makeQuestion(typeOfQuestions));
                      setBrailleStrings(
                        new BrailleArray(
                          [...Array(10)].map((_) => "⠀").join(""),
                          brailleDotCount,
                        ),
                      );
                      judgeAnswer(false);
                      setAfterJudgeAnswer(false);
                    }}
                  >
                    次の問題へ
                  </button>
                </div>
              );
            }
            return (
              <div className="flex basis-1/4 justify-center">
                <button
                  className="mb-2 me-2 rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                  type="button"
                  onClick={() => {
                    judgeAnswer(
                      brailleDotCount === 6
                        ? judge(brailleStrings, question)
                        : eightJudge(brailleStrings, question),
                    );
                    setAfterJudgeAnswer(true);
                  }}
                >
                  答え合わせ
                </button>
              </div>
            );
          })()}
        </div>
      </div>
      <div
        className={`${showBrailleChart ? "left-3/4" : "fixed left-full"} h-150 float-left w-1/4 overflow-auto`}
      >
        <HiraganaTableDialog />
      </div>
      <button
        className="fixed right-10 mb-2 me-2 rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        type="button"
        onClick={() => {
          setShowBrailleChart(!showBrailleChart);
        }}
      >
        点字表
      </button>
    </>
  );
}
