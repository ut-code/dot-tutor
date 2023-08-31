import { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Table,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { alphabetTable } from "@/utils/translateBraille";

export default function AlphabetTableDialog(): JSX.Element {
  const [isAlphabetTableOpen, setIsAlphabetTableOpen] =
    useState<boolean>(false);
  return (
    <Box paddingTop={2}>
      {isAlphabetTableOpen ? (
        <>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => {
              setIsAlphabetTableOpen(false);
            }}
          >
            点字⇔アルファベット表を閉じる
          </Button>
          <Box paddingTop={2}>
            <Paper elevation={2} sx={{ my: 2 }}>
              <Typography variant="h6" component="h2" color="inherit" p={2}>
                点字とアルファベットの対応表
              </Typography>
              <Table>
                <TableRow>
                  <TableCell>a</TableCell>
                  <TableCell>b</TableCell>
                  <TableCell>c</TableCell>
                  <TableCell>d</TableCell>
                  <TableCell>e</TableCell>
                  <TableCell>f</TableCell>
                  <TableCell>g</TableCell>
                  <TableCell>h</TableCell>
                  <TableCell>i</TableCell>
                  <TableCell>j</TableCell>
                  <TableCell>k</TableCell>
                  <TableCell>l</TableCell>
                  <TableCell>m</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{alphabetTable.a}</TableCell>
                  <TableCell>{alphabetTable.b}</TableCell>
                  <TableCell>{alphabetTable.c}</TableCell>
                  <TableCell>{alphabetTable.d}</TableCell>
                  <TableCell>{alphabetTable.e}</TableCell>
                  <TableCell>{alphabetTable.f}</TableCell>
                  <TableCell>{alphabetTable.g}</TableCell>
                  <TableCell>{alphabetTable.h}</TableCell>
                  <TableCell>{alphabetTable.i}</TableCell>
                  <TableCell>{alphabetTable.j}</TableCell>
                  <TableCell>{alphabetTable.k}</TableCell>
                  <TableCell>{alphabetTable.l}</TableCell>
                  <TableCell>{alphabetTable.m}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>n</TableCell>
                  <TableCell>o</TableCell>
                  <TableCell>p</TableCell>
                  <TableCell>q</TableCell>
                  <TableCell>r</TableCell>
                  <TableCell>s</TableCell>
                  <TableCell>t</TableCell>
                  <TableCell>u</TableCell>
                  <TableCell>v</TableCell>
                  <TableCell>w</TableCell>
                  <TableCell>x</TableCell>
                  <TableCell>y</TableCell>
                  <TableCell>z</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{alphabetTable.n}</TableCell>
                  <TableCell>{alphabetTable.o}</TableCell>
                  <TableCell>{alphabetTable.p}</TableCell>
                  <TableCell>{alphabetTable.q}</TableCell>
                  <TableCell>{alphabetTable.r}</TableCell>
                  <TableCell>{alphabetTable.s}</TableCell>
                  <TableCell>{alphabetTable.t}</TableCell>
                  <TableCell>{alphabetTable.u}</TableCell>
                  <TableCell>{alphabetTable.v}</TableCell>
                  <TableCell>{alphabetTable.w}</TableCell>
                  <TableCell>{alphabetTable.x}</TableCell>
                  <TableCell>{alphabetTable.y}</TableCell>
                  <TableCell>{alphabetTable.z}</TableCell>
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
            setIsAlphabetTableOpen(true);
          }}
        >
          点字⇔アルファベット表を確認する
        </Button>
      )}
    </Box>
  );
}
