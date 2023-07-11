import { useEffect, useState } from "react";
import React from "react";
import {
  ThumbUpOffAlt,
  ThumbDownOffAlt,
  ThumbUpAlt,
  ThumbDownAlt,
} from "@mui/icons-material";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { API_ENDPOINT } from "./commons/config";
import { unicodeToBes } from "./modules/unicodeToBes";

function App() {
  const [displaySourceText, setDisplaySourceText] = useState(
    "今日の天気は晴天ですね。\n今日の天気は晴天ですね。"
  );
  const [sourceText, setSourceText] = useState(
    "今日の天気は晴天ですね。\n今日の天気は晴天ですね。"
  );
  const [displayWakatiText, setDisplayWakatiText] = useState("");
  const [wakatiText, setWakatiText] = useState("");
  //const [displayTargetText, setDisplayTargetText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [wakatiReference, setWakatiReference] = useState("");
  const [thumbup, setThumbup] = React.useState(false);
  const [thumbdown, setThumbdown] = React.useState(false);

  async function source2wakati(text: string) {
    const response = await fetch(
      `${API_ENDPOINT}/source2wakati?sourceText=` + text
    );
    const data = await response.json();
    return data;
  }

  async function wakati2target(text: string) {
    const response = await fetch(
      `${API_ENDPOINT}/wakati2target?wakatiText=` + text
    );
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    source2wakati(sourceText.replace(/\n/g, "\\n")).then((data) => {
      setWakatiText(data.wakatiText);
      setDisplayWakatiText(data.wakatiText);
      setWakatiReference(data.wakatiText);
    });
  }, [sourceText]);

  useEffect(() => {
    wakati2target(wakatiText.replace(/\n/g, "\\n")).then((data) => {
      setTargetText(data.targetText);
      //setDisplayTargetText(data.targetText);
    });
  }, [wakatiText]);

  const theme = useTheme();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            ut.code(); 点字翻訳アプリ
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="px-5 bg-gray-100">
        <Box sx={{ justifyContent: "space-around" }}>
          <Box sx={{ mx: 2.5, pt: 1.5 }}>
            <Typography align="center" variant="h6" gutterBottom>
              翻訳元のテキスト
            </Typography>
            {/* set background color of TextField to white */}
            <TextField
              style={{ backgroundColor: "white" }}
              multiline
              variant="outlined"
              rows={6}
              fullWidth
              value={displaySourceText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDisplaySourceText(e.target.value);
                setSourceText(e.target.value.replace(/\n/g, "\\n"));
              }}
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(sourceText);
                }}
              >
                Copy
              </Button>
            </div>{" "}
          </Box>

          <Box sx={{ mx: 2.5 }}>
            <Box>
              {/* <TextField sx={{mt: 2}} style={{backgroundColor: theme.palette.secondary.main}} label="readonly" multiline variant="outlined" rows={4} fullWidth value={wakatiReference} /> */}

              <Typography align="center" variant="h6" gutterBottom>
                分かち書きのテキスト
              </Typography>
              <TextField
                style={{ backgroundColor: "white" }}
                multiline
                variant="outlined"
                rows={6}
                fullWidth
                value={displayWakatiText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setDisplayWakatiText(e.target.value);
                  setWakatiText(e.target.value.replace(/\n/g, "\\n"));
                }}
              />
            </Box>
            <Box></Box>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(wakatiText);
                }}
              >
                Copy
              </Button>
            </div>
          </Box>

          <Box sx={{ mx: 2.5, pb: 6 }}>
            <Typography align="center" variant="h6" gutterBottom>
              翻訳後のテキスト
            </Typography>
            <TextField
              style={{ backgroundColor: theme.palette.secondary.main }}
              label="readonly"
              multiline
              variant="outlined"
              rows={6}
              fullWidth
              value={targetText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                //setDisplayTargetText(e.target.value)
                setTargetText(e.target.value.replace(/\n/g, "\\n"));
              }}
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(targetText);
                }}
              >
                Copy
              </Button>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={() => {
                  const buffer = unicodeToBes(targetText.replace(/\n/g, "\\n"));
                  const blob = new Blob([buffer], { type: "text/plain" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "output.BES";
                  a.click();
                }}
              >
                Output
              </Button>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default App;
