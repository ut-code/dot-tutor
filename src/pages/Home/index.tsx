import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <>
      <h1>ホーム</h1>
      <Link href="/Keyboard">点字キーボード</Link>
      <br />
      <Link href="/Touch">Web 点字器</Link>
    </>
  );
}
