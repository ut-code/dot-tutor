import React, { useEffect, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Stack,
  IconButton,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { API_ENDPOINT } from "./commons/config";
import { unicodeToBes } from "./modules/unicodeToBes";
import GitHubIcon from "@mui/icons-material/GitHub";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import DownloadIcon from "@mui/icons-material/Download";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import translateBraille from "./utils/translateBraille";
import { BrailleArray } from "@dot-tutor/braille";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./index.css";

function App() {
  const [displaySourceText, setDisplaySourceText] =
    useState("今日の天気は晴天ですね。");
  const [sourceText, setSourceText] = useState("今日の天気は晴天ですね。");
  const [displayWakatiText, setDisplayWakatiText] = useState("");
  const [translateTextToDot, setTranslateTextToDot] = useState(true);
  const [wakatiText, setWakatiText] = useState("");
  const [displayTargetText, setDisplayTargetText] = useState("");
  const [targetText, setTargetText] = useState("");

  async function source2wakati(text: string) {
    const response = await fetch(
      `${API_ENDPOINT}/source2wakati?sourceText=` + text,
    );
    const data = await response.json();
    return data;
  }

  async function wakati2target(text: string) {
    const response = await fetch(
      `${API_ENDPOINT}/wakati2target?wakatiText=` + text,
    );
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    source2wakati(sourceText.replace(/\n/g, "\\n")).then((data) => {
      setWakatiText(data.wakatiText);
      if (translateTextToDot) {
        setDisplayWakatiText(data.wakatiText);
      }
    });
  }, [sourceText, translateTextToDot]);

  useEffect(() => {
    wakati2target(wakatiText.replace(/\n/g, "\\n")).then((data) => {
      setTargetText(data.targetText);
      if (translateTextToDot) {
        setDisplayTargetText(data.targetText);
      } else {
        setDisplayTargetText(
          translateBraille(
            new BrailleArray((sourceText.match(/[⠀-⣿]/g) ?? [""]).join(""), 6),
          ),
        );
      }
    });
  }, [sourceText, wakatiText, translateTextToDot]);

  const theme = useTheme();
  return (
    <Box className="App">
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" spacing={2} alignItems="center" flexGrow={1}>
            <img src="/logo-translate.svg" alt="ロゴ" width="40" height="40" />
            <Typography variant="h5" component="div" sx={{ fontWeight: 550 }}>
              Dot Tutor Translate
            </Typography>
          </Stack>
          <Stack>
            <IconButton
              color="inherit"
              href="https://github.com/ut-code/learn-braille"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box>
        <Box pt={5} sx={{ justifyContent: "space-around" }}>
          <Grid container spacing={1} sx={{ width: "80%", margin: "auto" }}>
            <Grid item xs={12} lg={5.75}>
              <ToggleButtonGroup
                value={translateTextToDot}
                exclusive
                onChange={(_, value) => setTranslateTextToDot(value)}
                aria-label="input type"
                size="small"
              >
                <ToggleButton
                  value={true}
                  aria-label="text"
                  selected={translateTextToDot}
                >
                  墨字
                </ToggleButton>
                <ToggleButton
                  value={false}
                  aria-label="dots"
                  selected={!translateTextToDot}
                >
                  点字
                </ToggleButton>
              </ToggleButtonGroup>
              <Box
                mt={1}
                p={2}
                sx={{ borderRadius: "10px", border: "1px solid darkgray" }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <TextField
                    autoFocus
                    style={{ backgroundColor: "white" }}
                    multiline
                    variant="standard"
                    rows={4}
                    value={displaySourceText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setDisplaySourceText(e.target.value);
                      setSourceText(e.target.value.replace(/\n/g, "\\n"));
                    }}
                    sx={{ width: "100%" }}
                  />
                  <IconButton
                    onClick={() => {
                      setSourceText("");
                      setDisplaySourceText("");
                    }}
                  >
                    <HighlightOffIcon />
                  </IconButton>
                </Box>
                {/* <TextField sx={{mt: 2}} style={{backgroundColor: theme.palette.secondary.main}} label="readonly" multiline variant="outlined" rows={4} fullWidth value={wakatiReference} /> */}
                {translateTextToDot && (
                  <TextField
                    style={{ backgroundColor: "white" }}
                    multiline
                    variant="standard"
                    label="分かち書き"
                    rows={4}
                    value={displayWakatiText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setDisplayWakatiText(e.target.value);
                      setWakatiText(e.target.value.replace(/\n/g, "\\n"));
                    }}
                    sx={{ width: "100%", borderTop: "1px solid gainsboro" }}
                  />
                )}
              </Box>
            </Grid>

            <Grid item xs={12} lg={0.5}>
              <IconButton
                aria-label="reverse"
                onClick={() => setTranslateTextToDot(!translateTextToDot)}
              >
                <SwapHorizIcon />
              </IconButton>
            </Grid>

            <Grid item xs={12} lg={5.75}>
              <ToggleButtonGroup
                value={translateTextToDot}
                exclusive
                onChange={(_, value) => setTranslateTextToDot(value)}
                aria-label="output type"
                size="small"
              >
                <ToggleButton value={true} aria-label="dots">
                  点字
                </ToggleButton>
                <ToggleButton value={false} aria-label="text">
                  墨字
                </ToggleButton>
              </ToggleButtonGroup>
              <Box
                mt={1}
                p={2}
                sx={{
                  borderRadius: "10px",
                  border: "1px solid darkgray",
                  backgroundColor: theme.palette.secondary.main,
                }}
              >
                <TextField
                  label="翻訳"
                  multiline
                  variant="standard"
                  rows={7}
                  value={displayTargetText}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    //setDisplayTargetText(e.target.value)
                    setTargetText(e.target.value.replace(/\n/g, "\\n"));
                  }}
                  sx={{ width: "100%" }}
                />
                <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                  <IconButton
                    onClick={() => {
                      navigator.clipboard.writeText(targetText);
                    }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                  {translateTextToDot && (
                    <IconButton
                      onClick={() => {
                        const buffer = unicodeToBes(
                          targetText.replace(/\n/g, "\\n"),
                        );
                        const blob = new Blob([buffer], { type: "text/plain" });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = "output.BES";
                        a.click();
                      }}
                    >
                      <DownloadIcon />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
