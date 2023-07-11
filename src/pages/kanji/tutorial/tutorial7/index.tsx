import TouchMain from "@/components/TouchMain";
import { Card, Typography } from "@mui/material";

export const advancedkanjiQuestions = ["神", "検", "言論", "訳", "凧あげ"]; // 濁音、半濁音が含まれる言葉

export default function Practice3(): JSX.Element {
  return (
    <>
      <Card>
        <Typography p={1} sx={{ minHeight: 10 }}>
          以下の例を参考にして答えましょう。
        </Typography>
        <Typography p={1} sx={{ minHeight: 10 }}>
          「祖」⡗⢼ 「険」⠗⢮ 「申」⠡⢮ 「木」⢏ 「尺」⠱⡪
        </Typography>
        <Typography p={1} sx={{ minHeight: 10 }}>
          「倫理」⡃⠺⣗⠮ 「風」⣳⠬ 「帆」⢧⣈ 「討」⠗⢮ 「訓」⡥⢊
        </Typography>
      </Card>
      <TouchMain typeOfQuestions={advancedkanjiQuestions} brailleDotCount={8} />
    </>
  );
}
