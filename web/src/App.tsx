import { useEffect, useState } from 'react'
import './App.css'
import React from 'react'
import { ThumbUpOffAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';
import { Button, AppBar, Toolbar, IconButton, Typography, TextField} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { API_ENDPOINT } from './commons/config';
import Grid from '@mui/system/Unstable_Grid';


function App() {
  const [sourceText, setSourceText] = useState('今日の天気は晴天ですね。')
  const [targetText, setTargetText] = useState('')
  const [wakatiText, setWakatiText] = useState('')
  const [wakatiReference, setWakatiReference] = useState('')
  const [thumbup, setThumbup] = React.useState(false);
  const [thumbdown, setThumbdown] = React.useState(false);

  async function source2wakati(text: string) {
    const response = await fetch(`${API_ENDPOINT}/source2wakati?sourceText=` + text);
    const data = await response.json();
    return data
  }

  async function wakati2target(text: string) {
    const response = await fetch(`${API_ENDPOINT}/wakati2target?wakatiText=` + text);
    const data = await response.json();
    return data
  }


  useEffect(() => {
    source2wakati(sourceText).then((data) => {
      setWakatiText(data.wakatiText)
      setWakatiReference(data.wakatiText)
    })
  },[sourceText])

  useEffect(() => {
    wakati2target(wakatiText).then((data) => {
      setTargetText(data.targetText)
    })
  },[wakatiText])

  const theme = useTheme();
  return (
    <Box className="App">
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

      <Box className="px-2 bg-gray-100">
        <Grid container spacing={2}>
          <Box sx={{m: 0.5}} >      
            <Typography variant="h6" gutterBottom>
              翻訳元のテキスト
            </Typography>        
            <TextField multiline variant="outlined" rows={4} fullWidth value={sourceText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSourceText(e.target.value)} />
            <Button onClick={() => {navigator.clipboard.writeText(sourceText)}}>Copy</Button>
          </Box>
          
          <Box sx={{m: 0.5}}>
            <Box>
              <Typography variant="h6" gutterBottom>
                分かち書きのテキスト
              </Typography> 
              <TextField multiline variant="outlined" rows={4} fullWidth value={wakatiText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWakatiText(e.target.value)} />
              <Button onClick={() => {navigator.clipboard.writeText(wakatiText)}}>Copy</Button>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                分かち書きのテキスト(編集前)
              </Typography> 
              <TextField multiline variant="outlined" rows={4} fullWidth value={wakatiReference} />
              <Box className="flex flex-col float-right">
                {thumbdown || <ThumbUpOffAlt onClick={()=>{setThumbup(true)}}/>}
                {thumbup || <ThumbDownOffAlt onClick={()=>{setThumbdown(true)}}/>}        
              </Box>
            </Box>
          </Box>

          <Box sx={{m: 0.5}}>
            <Typography variant="h6" gutterBottom>
              翻訳後のテキスト
            </Typography>
            <TextField multiline variant="outlined" rows={4} fullWidth value={targetText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTargetText(e.target.value)} />
            <Button onClick={() => {navigator.clipboard.writeText(targetText)}}>Copy</Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default App;