import { Braille, DotPositionType } from "braille";
import React, { Fragment } from "react";

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
 * @param dotPosition the position of the dot
 * @param shouldFill whether the dot should be filled
 * @param clicked function to call when the dot is clicked
 * @returns a single braille dot
 * @example
 * <BrailleDot
 *   dotPosition="dot1"
 *   shouldFill={true}
 *   clicked={() => {
 *     console.log("dot1 clicked");
 *   }}
 * />
 */
function BrailleDot({
  dotPosition,
  shouldFill,
  clicked,
}: {
  dotPosition: DotPositionType;
  shouldFill: boolean;
  clicked: () => void;
}): JSX.Element {
  return (
    <circle
      cx={xCoordinateList[dotPosition]}
      cy={yCoordinateList[dotPosition]}
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
 * const [braille, setBraille] = useState<Braille>(new Braille("⠀", 6));
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
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox={
        braille.getDotCount() === 6
          ? sixDotBrailleViewBoxSize
          : eightDotBrailleViewBoxSize
      }
    >
      {braille.getAvailableDotPositions().map((dotPosition) => (
        <Fragment key={dotPosition}>
          <BrailleDot
            dotPosition={dotPosition}
            shouldFill={braille.getDot(dotPosition)}
            clicked={() => {
              setBraille(braille.toggleDot(dotPosition));
            }}
          />
        </Fragment>
      ))}
    </svg>
  );
}
