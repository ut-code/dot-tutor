import React from "react";
import { Link } from "react-router-dom";

export default function Home(): JSX.Element {
  return (
    <>
      <h1>ホーム</h1>
      <Link to={"/keyboard"}>点字キーボード</Link>
    </>
  );
}
