import React, { Fragment, useCallback } from "react";
import {
  BrailleState,
  type AvailableDot,
  sixDotBrailleAvailableDots,
  eightDotBrailleAvailableDots,
  type SixDotBrailleAvailableDot,
  type EightDotBrailleAvailableDot,
} from "@/domain/BrailleState";
import {
  type Braille,
  EightDotBraille,
  SixDotBraille,
} from "@/domain/BrailleCharacter";

/**
 * the size of the SVG viewBox for six-dot braille
 */
const sixDotBrailleViewBoxSize = "0,0,120,160";
/**
 * the size of the SVG viewBox for eight-dot braille
 */
const eightDotBrailleViewBoxSize = "0,0,120,200";

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

/**
 * Component for displaying a single braille dot
 * @param dotNumber the number of the dot
 * @param shouldFill whether the dot should be filled
 * @param clicked function to call when the dot is clicked
 * @returns a single braille dot
 * @example
 * <BrailleDot
 *   dotNumber="dot1"
 *   shouldFill={true}
 *   clicked={() => {
 *     console.log("dot1 clicked");
 *   }}
 * />
 */
function BrailleDot({
  dotNumber,
  shouldFill,
  clicked,
}: {
  dotNumber: AvailableDot;
  shouldFill: boolean;
  clicked: () => void;
}): JSX.Element {
  return (
    <circle
      cx={xCoordinateList[dotNumber]}
      cy={yCoordinateList[dotNumber]}
      r="10"
      fill={shouldFill ? "black" : "#ccc"}
      onClick={clicked}
    />
  );
}

/**
 * Component for displaying touch-to-change braille
 * @param height height of the SVG
 * @param width width of the SVG
 * @param braille braille instance to display
 * @param setBraille function to update the braille instance when braille has been changed
 * @returns touch-to-change SVG braille
 * @example
 * const [braille, setBraille] = useState<Braille>(new Braille("unicode", "⠀"));
 *
 * <EdittableBraille
 *   height="100"
 *   width="60"
 *   braille={braille}
 *   setBraille={(braille) => {
 *     setBraille(braille);
 *   }}
 * />
 */
export default function EdittableBraille({
  height,
  width,
  braille,
  setBraille,
}: {
  height: string;
  width: string;
  braille: Braille;
  setBraille: (braille: Braille) => void;
}): JSX.Element {
  const toggleSixDotBrailleDot = useCallback(
    (dotNumber: SixDotBrailleAvailableDot) => {
      const newBrailleState = new BrailleState(
        {
          dot1: braille.brailleState.dot1,
          dot2: braille.brailleState.dot2,
          dot3: braille.brailleState.dot3,
          dot4: braille.brailleState.dot4,
          dot5: braille.brailleState.dot5,
          dot6: braille.brailleState.dot6,
          [dotNumber]: !braille.brailleState[dotNumber],
        },
        6,
      );
      setBraille(new SixDotBraille("braille state", newBrailleState));
    },
    [braille, setBraille],
  );
  const toggleEightDotBrailleDot = useCallback(
    (dotNumber: EightDotBrailleAvailableDot) => {
      const newBrailleState = new BrailleState(
        {
          dot1: braille.brailleState.dot1,
          dot2: braille.brailleState.dot2,
          dot3: braille.brailleState.dot3,
          dot7: braille.brailleState.dot7,
          dot4: braille.brailleState.dot4,
          dot5: braille.brailleState.dot5,
          dot6: braille.brailleState.dot6,
          dot8: braille.brailleState.dot8,
          [dotNumber]: !braille.brailleState[dotNumber],
        },
        8,
      );
      setBraille(new EightDotBraille("braille state", newBrailleState));
    },
    [braille, setBraille],
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox={
        braille.brailleDotCount === 6
          ? sixDotBrailleViewBoxSize
          : eightDotBrailleViewBoxSize
      }
    >
      {braille.brailleDotCount === 6 &&
        Object.values(sixDotBrailleAvailableDots).map((dotNumber) => (
          <Fragment key={dotNumber}>
            <BrailleDot
              dotNumber={dotNumber}
              shouldFill={braille.brailleState[dotNumber]}
              clicked={() => {
                toggleSixDotBrailleDot(dotNumber);
              }}
            />
          </Fragment>
        ))}
      {braille.brailleDotCount === 8 &&
        Object.values(eightDotBrailleAvailableDots).map((dotNumber) => (
          <Fragment key={dotNumber}>
            <BrailleDot
              dotNumber={dotNumber}
              shouldFill={braille.brailleState[dotNumber]}
              clicked={() => {
                toggleEightDotBrailleDot(dotNumber);
              }}
            />
          </Fragment>
        ))}
    </svg>
  );
}
