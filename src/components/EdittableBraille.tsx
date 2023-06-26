import React, { useState, useEffect, Fragment } from "react";
import { BrailleState, availableDots } from "@/types/BrailleState";
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
  const [brailleState, setBrailleState] = useState<BrailleState>(
    braille.brailleState
  );

  useEffect(() => {
    if (braille instanceof SixDotBraille) {
      updateBraille(new SixDotBraille("braille state", brailleState) as T);
    } else if (braille instanceof EightDotBraille) {
      updateBraille(new EightDotBraille("braille state", brailleState) as T);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brailleState]);

  /**
   * list of x coordinates for each dot
   */
  const xCoordinateList = {
    dot1: "40",
    dot2: "40",
    dot3: "40",
    dot7: "40",
    dot4: "80",
    dot5: "80",
    dot6: "80",
    dot8: "80",
  };

  /**
   * list of y coordinates for each dot
   */
  const yCoordinateList = {
    dot1: "40",
    dot2: "80",
    dot3: "120",
    dot7: "160",
    dot4: "40",
    dot5: "80",
    dot6: "120",
    dot8: "160",
  };

  const sixDotBrailleViewBox = "0,0,120,160";
  const eightDotBrailleViewBox = "0,0,120,200";

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox={
          braille instanceof SixDotBraille
            ? sixDotBrailleViewBox
            : eightDotBrailleViewBox
        }
      >
        {Object.values(availableDots).map(
          (dotNumber) =>
            (braille instanceof EightDotBraille ||
              (dotNumber !== "dot7" && dotNumber !== "dot8")) && (
              <Fragment key={dotNumber}>
                <circle
                  // @ts-expect-error - dotNumber is a valid key
                  cx={xCoordinateList[dotNumber]}
                  // @ts-expect-error - dotNumber is a valid key
                  cy={yCoordinateList[dotNumber]}
                  r="10"
                  // @ts-expect-error - dotNumber is a valid key
                  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                  fill={brailleState[dotNumber] ? "black" : "#ccc"}
                  onClick={() => {
                    setBrailleState(
                      new BrailleState({
                        dot1: brailleState.dot1,
                        dot2: brailleState.dot2,
                        dot3: brailleState.dot3,
                        dot7: brailleState.dot7,
                        dot4: brailleState.dot4,
                        dot5: brailleState.dot5,
                        dot6: brailleState.dot6,
                        dot8: brailleState.dot8,
                        // @ts-expect-error - dotNumber is a valid key
                        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                        [dotNumber]: !brailleState[dotNumber],
                      })
                    );
                  }}
                />
              </Fragment>
            )
        )}
      </svg>
    </>
  );
}
