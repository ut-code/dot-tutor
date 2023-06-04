import React, { useState, useEffect, Fragment } from "react";
import { type BrailleState, availableDots } from "../types/BrailleState";
import { SixDotBraille } from "@/models/Braille";

/**
 * Component for displaying touch-to-change braille
 * @param height height of the SVG
 * @param width width of the SVG
 * @param braille braille instance to display
 * @param updateBraille function to update the braille instance when braille has been changed
 * @returns touch-to-change SVG braille
 * @example
 * const [braille, setBraille] = useState<Braille>(new Braille("unicode", "⠀"));
 *
 * <EdittableBraille
 *   height="100"
 *   width="60"
 *   braille={braille}
 *   updateBraille={(braille) => {
 *     setBraille(braille);
 *   }}
 * />
 */
export default function EdittableBraille({
  height,
  width,
  braille,
  updateBraille,
}: {
  height: string;
  width: string;
  braille: SixDotBraille;
  updateBraille: (braille: SixDotBraille) => void;
}): JSX.Element {
  const [brailleState, setBrailleState] = useState<BrailleState>({
    ...braille.brailleState,
  });

  useEffect(() => {
    updateBraille(new SixDotBraille("braille state", brailleState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brailleState]);

  /**
   * list of x coordinates for each dot
   */
  const xCoordinateList = {
    Dot1: "40",
    Dot2: "40",
    Dot3: "40",
    Dot7: "40",
    Dot4: "90",
    Dot5: "90",
    Dot6: "90",
    Dot8: "90",
  };
  /**
   * list of y coordinates for each dot
   */
  const yCoordinateList = {
    Dot1: "30",
    Dot2: "75",
    Dot3: "120",
    Dot7: "165",
    Dot4: "30",
    Dot5: "75",
    Dot6: "120",
    Dot8: "165",
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox="0,0,120,205"
      >
        <text x="2" y="141" style={{ fontSize: "169px" }}>
          {new SixDotBraille("braille state", brailleState).unicodeBraille}
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
