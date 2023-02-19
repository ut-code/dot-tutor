import React from "react";
import useTypedBrailleStrings from "../../components/useTypedBrailleStrings";

export default function Keyboard(): JSX.Element {
  const [typedBrailleStrings] = useTypedBrailleStrings();
  return <>{typedBrailleStrings}</>;
}
