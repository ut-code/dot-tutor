import React, { useEffect, useState } from "react";
import translateBraille from "@/utils/translateBraille";
import { judge, eightJudge, makeQuestion } from "@/components/QuestionAndJudge";
import EdittableBraille from "@/components/EdittableBraille";
import { Paper, Typography, Divider, Button, Stack, Box } from "@mui/material";
import { BrailleString } from "@/domain/BrailleString";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import * as tenji from "tenji";
import styles from "./TouchMain.module.css";
import HiraganaTableDialog from "./HiraganaTableDialog";

export default function TouchMain({
  typeOfQuestions,
  brailleDotCount,
}: {
  typeOfQuestions: string[];
  brailleDotCount: 6 | 8;
}): JSX.Element {
  const [brailleStrings, setBrailleStrings] = useState<BrailleString>(
    new BrailleString(
      "unicode",
      [...Array(8)].map((_) => "⠀").join(""),
      brailleDotCount,
    ),
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
            brailleStrings.brailleArray
              .map((braille) => braille.unicodeBraille)
              .join(""),
            { kanji: true },
          ),
    );
  }, [brailleDotCount, brailleStrings]);

  return (
    <>
      <div className={showBrailleChart ? styles.show_chart : styles.hide_chart}>
        <div className={styles.question}>
          「{question}」を点字に直してください。
        </div>
        <div className={styles.touch_field}>
          {brailleStrings.brailleArray.map((brailleChar, i) => (
            <EdittableBraille
              key={i}
              height="150"
              width="90"
              braille={brailleChar}
              setBraille={(braille) => {
                setBrailleStrings(
                  new BrailleString(
                    "braille array",
                    brailleStrings.brailleArray.map((_, j) =>
                      j === i ? braille : _,
                    ),
                    brailleDotCount,
                  ),
                );
              }}
            />
          ))}
        </div>

        <div className={styles.judge_and_next_question}>
          {(() => {
            if (afterJudgeAnswer === true && rightOrWrong === true) {
              return (
                <div className={styles.judge}>
                  <CheckCircleOutlineIcon
                    className={`${styles.judge_icon} ${styles.right_icon}`}
                  />
                  <p className={styles.judge_text}>正解!!</p>
                </div>
              );
            }
            if (afterJudgeAnswer === true && rightOrWrong === false) {
              return (
                <div className={styles.judge}>
                  <CancelOutlinedIcon
                    className={`${styles.judge_icon} ${styles.wrong_icon}`}
                  />
                  <p className={styles.judge_text}>不正解</p>
                </div>
              );
            }
            return <div className={styles.judge}> </div>;
          })()}
          {(() => {
            if (afterJudgeAnswer === true) {
              return (
                <div className={styles.next_question}>
                  <button
                    className={
                      rightOrWrong
                        ? `${styles.btn} ${styles.right_next_btn}`
                        : `${styles.btn}  ${styles.wrong_next_btn}`
                    }
                    type="button"
                    onClick={() => {
                      setQuestion(makeQuestion(typeOfQuestions));
                      setBrailleStrings(
                        new BrailleString(
                          "unicode",
                          [...Array(8)].map((_) => "⠀").join(""),
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
              <div className={styles.next_question}>
                <button
                  className={`${styles.btn} ${styles.judge_btn}`}
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
      {/* {(() => {
        if (showBrailleChart === true) {
          return (
            <div className={styles.chart}>
              <HiraganaTableDialog />
            </div>
          );
        }
      })()} */}
      <div className={showBrailleChart ? styles.chart : styles.hidden_chart}>
        <HiraganaTableDialog />
      </div>
      <button
        className={styles.chart_btn}
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
