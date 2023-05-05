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
  braille,
  updateBraille,
}: {
  height: string;
  width: string;
  braille: Braille;
  updateBraille: (braille: Braille) => void;
}): JSX.Element {
  const [brailleState, setBrailleState] = useState<BrailleState>({
    ...braille.brailleState,
  });
  useEffect(() => {
    updateBraille(new Braille("braille state", brailleState));
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
