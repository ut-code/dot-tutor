import React, { useState, useEffect, Fragment } from "react";
import { type BrailleState, availableDots } from "../types/BrailleState";
import { SixDotBraille, EightDotBraille } from "@/models/BrailleCharacter";

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
 * <EdittableBraille<SixDotBraille>
 *   height="100"
 *   width="60"
 *   braille={braille}
 *   updateBraille={(braille) => {
 *     setBraille(braille);
 *   }}
 * />
 */
export default function EdittableBraille<
  T extends SixDotBraille | EightDotBraille
>({
  height,
  width,
  braille,
  updateBraille,
}: {
  height: string;
  width: string;
  braille: T;
  updateBraille: (braille: T) => void;
}): JSX.Element {
  const [brailleState, setBrailleState] = useState<BrailleState>({
    ...braille.brailleState,
  });

  useEffect(() => {
    if (braille instanceof SixDotBraille) {
      updateBraille(new SixDotBraille("braille state", brailleState) as T);
    } else if (braille instanceof EightDotBraille) {
      updateBraille(new EightDotBraille("braille state", brailleState) as T);
    }
  }, [brailleState, braille, updateBraille]);

  /**
   * list of x coordinates for each dot
   */
  const xCoordinateList = {
    Dot1: "40",
    Dot2: "40",
    Dot3: "40",
    Dot7: "40",
    Dot4: "80",
    Dot5: "80",
    Dot6: "80",
    Dot8: "80",
  };

  /**
   * list of y coordinates for each dot
   */
  const yCoordinateList = {
    Dot1: "40",
    Dot2: "80",
    Dot3: "120",
    Dot7: "160",
    Dot4: "40",
    Dot5: "80",
    Dot6: "120",
    Dot8: "160",
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox={`0,0,120,${
          braille instanceof EightDotBraille ? "200" : "160"
        }`}
      >
        {Object.values(availableDots).map(
          (dotNumber) =>
            (braille instanceof EightDotBraille ||
              (dotNumber !== "Dot7" && dotNumber !== "Dot8")) && (
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
            )
        )}
      </svg>
    </>
  );
}
