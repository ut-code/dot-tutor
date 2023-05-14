import React, { useState, useEffect, Fragment } from "react";
import { type BrailleState, availableDots } from "../types/brailleDefinitions";
import { Braille } from "@/models/Braille";

/**
 * component to create touch-to-change Braille
 * @param param0 props
 * @param param0.height height
 * @param param0.width width
 * @param param0.brailleChar character of Braille
 * @param param0.updateBrailleChar function to update the character of braille
 * @param param0.index index of the current character
 * @returns touch-to-change SVG Braille
 */
export default function EdittableBraille({
  height,
  width,
  brailleChar,
  updateBrailleChar,
}: {
  height: string;
  width: string;
  brailleChar: Braille;
  updateBrailleChar: (brailleChar: Braille) => void;
}): JSX.Element {
  const [brailleState, setBrailleState] = useState<BrailleState>({
    ...brailleChar.brailleState,
  });
  useEffect(() => {
    updateBrailleChar(brailleChar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brailleState]);
  const xCoordinateList = {
    Dot1: "40",
    Dot2: "40",
    Dot3: "40",
    Dot4: "40",
    Dot5: "90",
    Dot6: "90",
    Dot7: "90",
    Dot8: "90",
  };
  const yCoordinateList = {
    Dot1: "30",
    Dot2: "75",
    Dot3: "120",
    Dot4: "165",
    Dot5: "30",
    Dot6: "75",
    Dot7: "120",
    Dot8: "165",
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
          {new Braille("braille state", brailleState).unicodeBraille}
        </text>
        {Object.values(availableDots).map((dotNumber) => (
          <Fragment key={dotNumber}>
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
          </Fragment>
        ))}
      </svg>
    </>
  );
}
