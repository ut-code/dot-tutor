import { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { hiraganaTable } from "@/utils/translateBraille";

export function HiraganaTableDialog(): JSX.Element {
  const [isHiraganaTableOpen, setIsHiraganaTableOpen] =
    useState<boolean>(false);
  return (
    <Box paddingTop={2}>
      {isHiraganaTableOpen ? (
        <>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => {
              setIsHiraganaTableOpen(false);
            }}
          >
            点字⇔ひらがな表を閉じる
          </Button>
          <Box paddingTop={2}>
            <Paper elevation={2} sx={{ my: 2 }}>
              <Typography variant="h6" component="h2" color="inherit" p={2}>
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
            </Paper>
            <Paper elevation={2} sx={{ my: 2 }}>
              <Typography variant="h6" component="h2" color="inherit" p={2}>
                拗音の対応表
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell> </TableCell>
                    <TableCell>き</TableCell>
                    <TableCell>し</TableCell>
                    <TableCell>ち</TableCell>
                    <TableCell>ひ</TableCell>
                    <TableCell>み</TableCell>
                    <TableCell>り</TableCell>
                    <TableCell>ぎ</TableCell>
                    <TableCell>じ</TableCell>
                    <TableCell>ぢ</TableCell>
                    <TableCell>び</TableCell>
                    <TableCell>ぴ</TableCell>
                  </TableRow>
                </TableHead>
                <TableRow>
                  <TableCell>ゃ</TableCell>
                  <TableCell>⠈⠡</TableCell>
                  <TableCell>⠈⠱</TableCell>
                  <TableCell>⠈⠕</TableCell>
                  <TableCell>⠈⠥</TableCell>
                  <TableCell>⠈⠵</TableCell>
                  <TableCell>⠈⠑</TableCell>
                  <TableCell>⠘⠡</TableCell>
                  <TableCell>⠘⠱</TableCell>
                  <TableCell>⠘⠕</TableCell>
                  <TableCell>⠘⠥</TableCell>
                  <TableCell>⠨⠥</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ゅ</TableCell>
                  <TableCell>⠈⠩</TableCell>
                  <TableCell>⠈⠹</TableCell>
                  <TableCell>⠈⠝</TableCell>
                  <TableCell>⠈⠭</TableCell>
                  <TableCell>⠈⠽</TableCell>
                  <TableCell>⠈⠙</TableCell>
                  <TableCell>⠘⠩</TableCell>
                  <TableCell>⠘⠹</TableCell>
                  <TableCell>⠘⠝</TableCell>
                  <TableCell>⠘⠭</TableCell>
                  <TableCell>⠨⠭</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ょ</TableCell>
                  <TableCell>⠈⠪</TableCell>
                  <TableCell>⠈⠺</TableCell>
                  <TableCell>⠈⠞</TableCell>
                  <TableCell>⠈⠮</TableCell>
                  <TableCell>⠈⠾</TableCell>
                  <TableCell>⠈⠚</TableCell>
                  <TableCell>⠘⠪</TableCell>
                  <TableCell>⠘⠺</TableCell>
                  <TableCell>⠘⠞</TableCell>
                  <TableCell>⠘⠮</TableCell>
                  <TableCell>⠨⠮</TableCell>
                </TableRow>
              </Table>
            </Paper>
            <Paper elevation={2} sx={{ my: 2 }}>
              <Typography variant="h6" component="h2" color="inherit" p={2}>
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
            </Paper>
          </Box>
        </>
      ) : (
        <Button
          color="inherit"
          variant="outlined"
          onClick={() => {
            setIsHiraganaTableOpen(true);
          }}
        >
          点字⇔ひらがな表を確認する
        </Button>
      )}
    </Box>
  );
}

export function HiraganaTableDialogForTouch(): JSX.Element {
  return (
    <>
      <Box paddingTop={2}>
        <Box paddingTop={2}>
          <Paper elevation={2} sx={{ my: 2 }}>
            <Typography variant="h6" component="h2" color="inherit" p={2}>
              点字とひらがなの対応表
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>行/列</TableCell>
                  <TableCell>あ</TableCell>
                  <TableCell>い</TableCell>
                  <TableCell>う</TableCell>
                  <TableCell>え</TableCell>
                  <TableCell>お</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>あ</TableCell>
                  <TableCell>{hiraganaTable.あ}</TableCell>
                  <TableCell>{hiraganaTable.い}</TableCell>
                  <TableCell>{hiraganaTable.う}</TableCell>
                  <TableCell>{hiraganaTable.え}</TableCell>
                  <TableCell>{hiraganaTable.お}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>か</TableCell>
                  <TableCell>{hiraganaTable.か}</TableCell>
                  <TableCell>{hiraganaTable.き}</TableCell>
                  <TableCell>{hiraganaTable.く}</TableCell>
                  <TableCell>{hiraganaTable.け}</TableCell>
                  <TableCell>{hiraganaTable.こ}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>さ</TableCell>
                  <TableCell>{hiraganaTable.さ}</TableCell>
                  <TableCell>{hiraganaTable.し}</TableCell>
                  <TableCell>{hiraganaTable.す}</TableCell>
                  <TableCell>{hiraganaTable.せ}</TableCell>
                  <TableCell>{hiraganaTable.そ}</TableCell>
                  <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>た</TableCell>
                  <TableCell>{hiraganaTable.た}</TableCell>
                  <TableCell>{hiraganaTable.ち}</TableCell>
                  <TableCell>{hiraganaTable.つ}</TableCell>
                  <TableCell>{hiraganaTable.て}</TableCell>
                  <TableCell>{hiraganaTable.と}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>な</TableCell>
                  <TableCell>{hiraganaTable.な}</TableCell>
                  <TableCell>{hiraganaTable.に}</TableCell>
                  <TableCell>{hiraganaTable.ぬ}</TableCell>
                  <TableCell>{hiraganaTable.ね}</TableCell>
                  <TableCell>{hiraganaTable.の}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>は</TableCell>
                  <TableCell>{hiraganaTable.は}</TableCell>
                  <TableCell>{hiraganaTable.ひ}</TableCell>
                  <TableCell>{hiraganaTable.ふ}</TableCell>
                  <TableCell>{hiraganaTable.へ}</TableCell>
                  <TableCell>{hiraganaTable.ほ}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ま</TableCell>
                  <TableCell>{hiraganaTable.ま}</TableCell>
                  <TableCell>{hiraganaTable.み}</TableCell>
                  <TableCell>{hiraganaTable.む}</TableCell>
                  <TableCell>{hiraganaTable.め}</TableCell>
                  <TableCell>{hiraganaTable.も}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>や</TableCell>
                  <TableCell>{hiraganaTable.や}</TableCell>
                  <TableCell> </TableCell>
                  <TableCell>{hiraganaTable.ゆ}</TableCell>
                  <TableCell> </TableCell>
                  <TableCell>{hiraganaTable.よ}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ら</TableCell>
                  <TableCell>{hiraganaTable.ら}</TableCell>
                  <TableCell>{hiraganaTable.り}</TableCell>
                  <TableCell>{hiraganaTable.る}</TableCell>
                  <TableCell>{hiraganaTable.れ}</TableCell>
                  <TableCell>{hiraganaTable.ろ}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>わ</TableCell>
                  <TableCell>{hiraganaTable.わ}</TableCell>
                  <TableCell> </TableCell>
                  <TableCell>{hiraganaTable.を}</TableCell>
                  <TableCell> </TableCell>
                  <TableCell>{hiraganaTable.ん} </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <Paper elevation={2} sx={{ my: 2 }}>
            <Typography variant="h6" component="h2" color="inherit" p={2}>
              拗音の対応表
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell> </TableCell>
                  <TableCell>ゃ</TableCell>
                  <TableCell>ゅ</TableCell>
                  <TableCell>ょ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>き</TableCell>
                  <TableCell>⠈⠡</TableCell>
                  <TableCell>⠈⠩</TableCell>
                  <TableCell>⠈⠪</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>し</TableCell>
                  <TableCell>⠈⠱</TableCell>
                  <TableCell>⠈⠹</TableCell>
                  <TableCell>⠈⠺</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ち</TableCell>
                  <TableCell>⠈⠕</TableCell>
                  <TableCell>⠈⠝</TableCell>
                  <TableCell>⠈⠞</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ひ</TableCell>
                  <TableCell>⠈⠥</TableCell>
                  <TableCell>⠈⠭</TableCell>
                  <TableCell>⠈⠮</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>み</TableCell>
                  <TableCell>⠈⠵</TableCell>
                  <TableCell>⠈⠽</TableCell>
                  <TableCell>⠈⠾</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>り</TableCell>
                  <TableCell>⠈⠑</TableCell>
                  <TableCell>⠈⠙</TableCell>
                  <TableCell>⠈⠚</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ぎ</TableCell>
                  <TableCell>⠘⠡</TableCell>
                  <TableCell>⠘⠩</TableCell>
                  <TableCell>⠘⠪</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>じ</TableCell>
                  <TableCell>⠘⠱</TableCell>
                  <TableCell>⠘⠹</TableCell>
                  <TableCell>⠘⠺</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ぢ</TableCell>
                  <TableCell>⠘⠕</TableCell>
                  <TableCell>⠘⠝</TableCell>
                  <TableCell>⠘⠞</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>び</TableCell>
                  <TableCell>⠘⠥</TableCell>
                  <TableCell>⠘⠭</TableCell>
                  <TableCell>⠘⠮</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ぴ</TableCell>
                  <TableCell>⠨⠥</TableCell>
                  <TableCell>⠨⠭</TableCell>
                  <TableCell>⠨⠮</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <Paper elevation={2} sx={{ my: 2 }}>
            <Typography variant="h6" component="h2" color="inherit" p={2}>
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
              <TableBody>
                <TableRow>
                  <TableCell>点字</TableCell>
                  <TableCell>⠴</TableCell>
                  <TableCell>⠒</TableCell>
                  <TableCell>⠂</TableCell>
                  <TableCell>⠐</TableCell>
                  <TableCell>⠠</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
