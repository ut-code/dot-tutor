import { type SetStateAction, type Dispatch } from "react";
import {
  Typography,
  Box,
  Dialog,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { hiraganaTable } from "@/utils/translateBraille";

export default function HiraganaTableDialog(props: {
  open: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  function closeDialog(): void {
    props.setClose(false);
  }
  return (
    <Dialog
      open={props.open}
      onClose={() => {
        closeDialog();
      }}
    >
      <Box p={4}>
        <Typography variant="h4" m={2}>
          点字とひらがなの対応表
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>行/列</TableCell>
              <TableCell>あ</TableCell>
              <TableCell>か</TableCell>
              <TableCell>さ</TableCell>
              <TableCell>た</TableCell>
              <TableCell>な</TableCell>
              <TableCell>は</TableCell>
              <TableCell>ま</TableCell>
              <TableCell>や</TableCell>
              <TableCell>ら</TableCell>
              <TableCell>わ</TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell>あ</TableCell>
            <TableCell>{hiraganaTable.あ}</TableCell>
            <TableCell>{hiraganaTable.か}</TableCell>
            <TableCell>{hiraganaTable.さ}</TableCell>
            <TableCell>{hiraganaTable.た}</TableCell>
            <TableCell>{hiraganaTable.な}</TableCell>
            <TableCell>{hiraganaTable.は}</TableCell>
            <TableCell>{hiraganaTable.ま}</TableCell>
            <TableCell>{hiraganaTable.や}</TableCell>
            <TableCell>{hiraganaTable.ら}</TableCell>
            <TableCell>{hiraganaTable.わ}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>い</TableCell>
            <TableCell>{hiraganaTable.い}</TableCell>
            <TableCell>{hiraganaTable.き}</TableCell>
            <TableCell>{hiraganaTable.し}</TableCell>
            <TableCell>{hiraganaTable.ち}</TableCell>
            <TableCell>{hiraganaTable.に}</TableCell>
            <TableCell>{hiraganaTable.ひ}</TableCell>
            <TableCell>{hiraganaTable.み}</TableCell>
            <TableCell> </TableCell>
            <TableCell>{hiraganaTable.り}</TableCell>
            <TableCell> </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>う</TableCell>
            <TableCell>{hiraganaTable.う}</TableCell>
            <TableCell>{hiraganaTable.く}</TableCell>
            <TableCell>{hiraganaTable.す}</TableCell>
            <TableCell>{hiraganaTable.つ}</TableCell>
            <TableCell>{hiraganaTable.ぬ}</TableCell>
            <TableCell>{hiraganaTable.ふ}</TableCell>
            <TableCell>{hiraganaTable.む}</TableCell>
            <TableCell>{hiraganaTable.ゆ}</TableCell>
            <TableCell>{hiraganaTable.る}</TableCell>
            <TableCell> </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>え</TableCell>
            <TableCell>{hiraganaTable.え}</TableCell>
            <TableCell>{hiraganaTable.け}</TableCell>
            <TableCell>{hiraganaTable.せ}</TableCell>
            <TableCell>{hiraganaTable.て}</TableCell>
            <TableCell>{hiraganaTable.ね}</TableCell>
            <TableCell>{hiraganaTable.へ}</TableCell>
            <TableCell>{hiraganaTable.め}</TableCell>
            <TableCell> </TableCell>
            <TableCell>{hiraganaTable.れ}</TableCell>
            <TableCell> </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>お</TableCell>
            <TableCell>{hiraganaTable.お}</TableCell>
            <TableCell>{hiraganaTable.こ}</TableCell>
            <TableCell>{hiraganaTable.そ}</TableCell>
            <TableCell>{hiraganaTable.と}</TableCell>
            <TableCell>{hiraganaTable.の}</TableCell>
            <TableCell>{hiraganaTable.ほ}</TableCell>
            <TableCell>{hiraganaTable.も}</TableCell>
            <TableCell>{hiraganaTable.よ}</TableCell>
            <TableCell>{hiraganaTable.ろ}</TableCell>
            <TableCell>{hiraganaTable.を}(を)</TableCell>
          </TableRow>
        </Table>
        <Typography variant="h4" m={2}>
          その他の対応表
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>他</TableCell>
              <TableCell>ん</TableCell>
              <TableCell>長音</TableCell>
              <TableCell>促音(っ)</TableCell>
              <TableCell>濁音</TableCell>
              <TableCell>半濁音</TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell>点字</TableCell>
            <TableCell>⠴</TableCell>
            <TableCell>⠒</TableCell>
            <TableCell>⠂</TableCell>
            <TableCell>⠐</TableCell>
            <TableCell>⠠</TableCell>
          </TableRow>
        </Table>
      </Box>
    </Dialog>
  );
}
