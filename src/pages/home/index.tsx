import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <>
      <h1>ホーム</h1>
      <Link href="/keyboard">点字キーボード</Link>
      <br />
      <Link href="/touch">Web 点字器</Link>
    </>
  );
}
