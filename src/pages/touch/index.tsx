import React, {
  useState,
  useEffect,
  type Dispatch,
  type SetStateAction,
} from "react";
import {
  type BrailleChar,
  type BrailleState,
  availableDots,
} from "../../components/brailleDefinitions";
import fromBrailleChar from "../../components/fromBrailleChar";
import toBrailleChar from "../../components/toBrailleChar";

/**
 * component to create touch-to-change Braille
 * @param param0.height height
 * @param param0.width width
 * @param param0.brailleStrings strings of Braille
 * @param param0.setBrailleStrings function to update the strings
 * @param param0.index index of the current character
 * @returns touch-to-change SVG Braille
 */
function EdittableBraille({
  height,
  width,
  brailleStrings,
  setBrailleStrings,
  index,
}: {
  height: string;
  width: string;
  brailleStrings: BrailleChar[];
  setBrailleStrings: Dispatch<SetStateAction<BrailleChar[]>>;
  index: number;
}): JSX.Element {
  const [brailleState, setBrailleState] = useState<BrailleState>(
    fromBrailleChar(brailleStrings[index])
  );
  useEffect(() => {
    setBrailleStrings(
      brailleStrings.map((brailleChar, i) =>
        i === index ? toBrailleChar(brailleState) : brailleChar
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brailleState]);
  const xCoordinateList = {
    Dot1: "40",
    Dot2: "40",
    Dot3: "40",
    Dot4: "90",
    Dot5: "90",
    Dot6: "90",
  };
  const yCoordinateList = {
    Dot1: "30",
    Dot2: "75",
    Dot3: "120",
    Dot4: "30",
    Dot5: "75",
    Dot6: "120",
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox="0,0,120,160"
      >
        <text x="2" y="141" style={{ fontSize: "169px" }}>
          {toBrailleChar(brailleState)}
        </text>
        {Object.values(availableDots).map((dotNumber) => (
          <React.Fragment key={dotNumber}>
            <circle
              cx={xCoordinateList[dotNumber]}
              cy={yCoordinateList[dotNumber]}
              r="10"
              fill={brailleState[dotNumber] ? "black" : "#ccc"}
              onClick={() => {
                setBrailleState({
                  ...brailleState,
                  [dotNumber]: !brailleState[dotNumber],
                });
              }}
            />
          </React.Fragment>
        ))}
      </svg>
    </>
  );
}

export default function Touch(): JSX.Element {
  const [brailleStrings, setBrailleStrings] = useState<BrailleChar[]>(
    [...Array(100)].map((_) => "⠀")
  );

  const [hiraganaStrings, setHiraganaStrings] = useState<string>();

  const translateBrailleToHiragana = (brailleStrings: BrailleChar[]) => {
    let hiraganaStrings: string = "";
    let dakuten: boolean = false;
    let handakuten: boolean = false;
    let contraction: boolean = false;
    let dakutenContraction: boolean = false;
    let handakutenContraction: boolean = false;

    brailleStrings.map((brailleChar, i) => {
      let hiragana: string = "";
      //日本語凸面点字の対応
      if (brailleStrings[i] == "⠁") {
        hiragana = "あ";
      } else if (brailleStrings[i] == "⠃") {
        hiragana = "い";
      } else if (brailleStrings[i] == "⠉") {
        hiragana = "う";
      } else if (brailleStrings[i] == "⠋") {
        hiragana = "え";
      } else if (brailleStrings[i] == "⠊") {
        hiragana = "お";
      } else if (brailleStrings[i] == "⠡") {
        if (dakuten) {
          hiragana = "が";
          dakuten = false;
        } else if (contraction) {
          hiragana = "きゃ";
          contraction = false;
        } else if (dakutenContraction) {
          hiragana = "ぎゃ";
          dakutenContraction = false;
        } else {
          hiragana = "か";
        }
      } else if (brailleStrings[i] == "⠣") {
        if (dakuten) {
          hiragana = "ぎ";
          dakuten = false;
        } else {
          hiragana = "き";
        }
      } else if (brailleStrings[i] == "⠩") {
        if (dakuten) {
          hiragana = "ぐ";
          dakuten = false;
        } else if (contraction) {
          hiragana = "きゅ";
          contraction = false;
        } else if (dakutenContraction) {
          hiragana = "ぎゅ";
          dakutenContraction = false;
        } else {
          hiragana = "く";
        }
      } else if (brailleStrings[i] == "⠫") {
        if (dakuten) {
          hiragana = "げ";
          dakuten = false;
        } else {
          hiragana = "け";
        }
      } else if (brailleStrings[i] == "⠪") {
        if (dakuten) {
          hiragana = "ご";
          dakuten = false;
        } else if (contraction) {
          hiragana = "きょ";
          contraction = false;
        } else if (dakutenContraction) {
          hiragana = "ぎょ";
          dakutenContraction = false;
        } else {
          hiragana = "こ";
        }
      } else if (brailleStrings[i] == "⠱") {
        if (dakuten) {
          hiragana = "ざ";
          dakuten = false;
        } else if (contraction) {
          hiragana = "しゃ";
          contraction = false;
        } else if (dakutenContraction) {
          hiragana = "じゃ";
          dakutenContraction = false;
        } else {
          hiragana = "さ";
        }
      } else if (brailleStrings[i] == "⠳") {
        if (dakuten) {
          hiragana = "じ";
          dakuten = false;
        } else {
          hiragana = "し";
        }
      } else if (brailleStrings[i] == "⠹") {
        if (dakuten) {
          hiragana = "ず";
          dakuten = false;
        } else if (contraction) {
          hiragana = "しゅ";
          contraction = false;
        } else if (dakutenContraction) {
          hiragana = "じゅ";
          dakutenContraction = false;
        } else {
          hiragana = "す";
        }
      } else if (brailleStrings[i] == "⠻") {
        if (dakuten) {
          hiragana = "ぜ";
          dakuten = false;
        } else {
          hiragana = "せ";
        }
      } else if (brailleStrings[i] == "⠺") {
        if (dakuten) {
          hiragana = "ぞ";
          dakuten = false;
        } else if (contraction) {
          hiragana = "しょ";
          contraction = false;
        } else if (dakutenContraction) {
          hiragana = "じょ";
          dakutenContraction = false;
        } else {
          hiragana = "そ";
        }
      } else if (brailleStrings[i] == "⠕") {
        if (dakuten) {
          hiragana = "だ";
          dakuten = false;
        } else if (contraction) {
          hiragana = "ちゃ";
          contraction = false;
        } else if (dakutenContraction) {
          hiragana = "ぢゃ";
          dakutenContraction = false;
        } else {
          hiragana = "た";
        }
      } else if (brailleStrings[i] == "⠗") {
        if (dakuten) {
          hiragana = "ぢ";
          dakuten = false;
        } else {
          hiragana = "ち";
        }
      } else if (brailleStrings[i] == "⠝") {
        if (dakuten) {
          hiragana = "づ";
          dakuten = false;
        } else if (contraction) {
          hiragana = "ちゅ";
          contraction = false;
        } else if (dakutenContraction) {
          hiragana = "ぢゅ";
          dakutenContraction = false;
        } else {
          hiragana = "つ";
        }
      } else if (brailleStrings[i] == "⠟") {
        if (dakuten) {
          hiragana = "で";
          dakuten = false;
        } else {
          hiragana = "て";
        }
      } else if (brailleStrings[i] == "⠞") {
        if (dakuten) {
          hiragana = "ど";
          dakuten = false;
        } else if (contraction) {
          hiragana = "ちょ";
          contraction = false;
        } else if (dakutenContraction) {
          hiragana = "ぢょ";
          dakutenContraction = false;
        } else {
          hiragana = "と";
        }
      } else if (brailleStrings[i] == "⠅") {
        if (contraction) {
          hiragana = "にゃ";
          contraction = false;
        } else {
          hiragana = "な";
        }
      } else if (brailleStrings[i] == "⠇") {
        hiragana = "に";
      } else if (brailleStrings[i] == "⠍") {
        if (contraction) {
          hiragana = "にゅ";
          contraction = false;
        } else {
          hiragana = "ぬ";
        }
      } else if (brailleStrings[i] == "⠏") {
        hiragana = "ね";
      } else if (brailleStrings[i] == "⠎") {
        if (contraction) {
          hiragana = "にょ";
          contraction = false;
        } else {
          hiragana = "の";
        }
      } else if (brailleStrings[i] == "⠥") {
        if (dakuten) {
          hiragana = "ば";
          dakuten = false;
        } else if (contraction) {
          hiragana = "ひゃ";
          contraction = false;
        } else if (dakutenContraction) {
          hiragana = "びゃ";
          dakutenContraction = false;
        } else if (handakutenContraction) {
          hiragana = "ぴゃ";
          handakutenContraction = false;
        } else {
          hiragana = "は";
        }
      } else if (brailleStrings[i] == "⠧") {
        if (dakuten) {
          hiragana = "び";
          dakuten = false;
        } else if (handakuten) {
          hiragana = "ぴ";
          handakuten = false;
        } else {
          hiragana = "ひ";
        }
      } else if (brailleStrings[i] == "⠭") {
        if (dakuten) {
          hiragana = "ぶ";
          dakuten = false;
        } else if (handakuten) {
          hiragana = "ぷ";
          handakuten = false;
        } else if (contraction) {
          hiragana = "ひゅ";
          contraction = false;
        } else if (dakutenContraction) {
          hiragana = "びゅ";
          dakutenContraction = false;
        } else if (handakutenContraction) {
          hiragana = "ぴゅ";
          handakutenContraction = false;
        } else {
          hiragana = "ふ";
        }
      } else if (brailleStrings[i] == "⠯") {
        if (dakuten) {
          hiragana = "べ";
          dakuten = false;
        } else if (handakuten) {
          hiragana = "ぺ";
          handakuten = false;
        } else {
          hiragana = "へ";
        }
      } else if (brailleStrings[i] == "⠮") {
        if (dakuten) {
          hiragana = "ぼ";
          dakuten = false;
        } else if (handakuten) {
          hiragana = "ぽ";
          handakuten = false;
        } else if (contraction) {
          hiragana = "ひょ";
          contraction = false;
        } else if (dakutenContraction) {
          hiragana = "びょ";
          dakutenContraction = false;
        } else if (handakutenContraction) {
          hiragana = "ぴょ";
          handakutenContraction = false;
        } else {
          hiragana = "ほ";
        }
      } else if (brailleStrings[i] == "⠵") {
        if (contraction) {
          hiragana = "みゃ";
          contraction = false;
        } else {
          hiragana = "ま";
        }
      } else if (brailleStrings[i] == "⠷") {
        hiragana = "み";
      } else if (brailleStrings[i] == "⠽") {
        if (contraction) {
          hiragana = "みゅ";
          contraction = false;
        } else {
          hiragana = "む";
        }
      } else if (brailleStrings[i] == "⠿") {
        hiragana = "め";
      } else if (brailleStrings[i] == "⠾") {
        if (contraction) {
          hiragana = "みょ";
          contraction = false;
        } else {
          hiragana = "も";
        }
      } else if (brailleStrings[i] == "⠌") {
        hiragana = "や";
      } else if (brailleStrings[i] == "⠬") {
        hiragana = "ゆ";
      } else if (brailleStrings[i] == "⠜") {
        hiragana = "よ";
      } else if (brailleStrings[i] == "⠑") {
        if (contraction) {
          hiragana = "りゃ";
          contraction = false;
        } else {
          hiragana = "ら";
        }
      } else if (brailleStrings[i] == "⠓") {
        hiragana = "り";
      } else if (brailleStrings[i] == "⠙") {
        if (contraction) {
          hiragana = "りゅ";
          contraction = false;
        } else {
          hiragana = "る";
        }
      } else if (brailleStrings[i] == "⠛") {
        hiragana = "れ";
      } else if (brailleStrings[i] == "⠚") {
        if (contraction) {
          hiragana = "りょ";
          contraction = false;
        } else {
          hiragana = "ろ";
        }
      } else if (brailleStrings[i] == "⠄") {
        hiragana = "わ";
      } else if (brailleStrings[i] == "⠔") {
        hiragana = "を";
      } else if (brailleStrings[i] == "⠴") {
        hiragana = "ん";
      } else if (brailleStrings[i] == "⠒") {
        hiragana = "ー";
      } else if (brailleStrings[i] == "⠂") {
        hiragana = "っ";
      } else if (brailleStrings[i] == "⠐") {
        dakuten = true;
      } else if (brailleStrings[i] == "⠠") {
        handakuten = true;
      } else if (brailleStrings[i] == "⠈") {
        contraction = true;
      } else if (brailleStrings[i] == "⠘") {
        dakutenContraction = true;
      } else if (brailleStrings[i] == "⠨") {
        handakutenContraction = true;
      }
      hiraganaStrings += hiragana;
    });
    setHiraganaStrings(hiraganaStrings);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          translateBrailleToHiragana(brailleStrings);
        }}
      >
        翻訳
      </button>
      <p>{hiraganaStrings}</p>

      {brailleStrings.map((_, index) => (
        <EdittableBraille
          key={index}
          height={"100"}
          width={"60"}
          brailleStrings={brailleStrings}
          setBrailleStrings={setBrailleStrings}
          index={index}
        />
      ))}
    </>
  );
}
