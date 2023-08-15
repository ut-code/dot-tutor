import TouchMain from "@/components/TouchMain";
import { Card, Typography } from "@mui/material";

export const advancedkanjiQuestions = [
  "俳優",
  "栃木",
  "清流",
  "価格",
  "海水浴",
]; // 濁音、半濁音が含まれる言葉

export default function Practice3(): JSX.Element {
  return (
    <TouchMain typeOfQuestions={advancedkanjiQuestions} brailleDotCount={8} />
  );
}
