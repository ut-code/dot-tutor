import Head from "next/head";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>点字学習ソフトウェア</title>
        <meta name="description" content="点字学習ソフトウェアです" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>ホーム</h1>
        <Link href="/keyboard">点字キーボード</Link>
        <br />
        <Link href="/touch">Web 点字器</Link>
      </main>
    </>
  );
}
