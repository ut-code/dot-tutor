import TouchMain from "@/components/TouchMain";

export const gojyuonQuestions1 = [
  "かき",
  "かこ",
  "かう",
  "かお",
  "きあい",
  "きおう",
  "きく",
  "くい",
  "くう",
  "くき",
  "くく",
  "こい",
  "こうくう",
]; // 「あいうえおかきくけこ」で構成される

export default function Practice2(): JSX.Element {
  return <TouchMain typeOfQuestions={gojyuonQuestions1} brailleDotCount={6} />;
}
