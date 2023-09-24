import React, { useEffect, useState } from "react";
import translateBraille from "@/utils/translateBraille";
import { judge, eightJudge, makeQuestion } from "@/components/QuestionAndJudge";
import EdittableBraille from "@/components/EdittableBraille";
import {
  Paper,
  Typography,
  Divider,
  Button,
  Stack,
  Box,
  Container,
  styled,
} from "@mui/material";
import { BrailleString } from "@/models/BrailleString";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RefreshIcon from "@mui/icons-material/Refresh";
import * as tenji from "tenji";
import { Height } from "@mui/icons-material";
import styles from "./TouchMain.module.css";

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

  useEffect(() => {
    judgeAnswer(
      brailleDotCount === 6
        ? judge(brailleStrings, question)
        : eightJudge(brailleStrings, question),
    );
  }, [brailleDotCount, brailleStrings, question]);

  return (
    <>
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
        <div className={styles.judge}>
          {afterJudgeAnswer === true ? (
            rightOrWrong === true ? (
              <p>正解</p>
            ) : (
              <p>不正解</p>
            )
          ) : null}
        </div>

        <div className={styles.next_question}>
          {afterJudgeAnswer === true ? (
            rightOrWrong === true ? (
              <button
                className={styles.next_question_button}
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
            ) : (
              <button
                className={styles.next_question_button}
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
            )
          ) : (
            <button
              className={styles.next_question_button}
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
          )}
        </div>
      </div>
    </>
  );
}
