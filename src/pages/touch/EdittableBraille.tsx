import React, {
  useState,
  useEffect,
  Fragment,
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
 * @param param0 props
 * @param param0.height height
 * @param param0.width width
 * @param param0.brailleStrings strings of Braille
 * @param param0.setBrailleStrings function to update the strings
 * @param param0.index index of the current character
 * @returns touch-to-change SVG Braille
 */
export default function EdittableBraille({
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
