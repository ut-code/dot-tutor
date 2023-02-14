import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={"/"}>ホームに戻る</Link>
    </>
  );
}
