import React from "react";
import useTypedBraille from "../../components/useTypedBraille";

export default function Keyboard(): JSX.Element {
  const typedBraille = useTypedBraille();
  return <>{typedBraille}</>;
}
