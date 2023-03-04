import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { ThumbUpOffAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';
import { Button, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const TextAreaEditable = () => {
  const [content, setContent] = React.useState("")
  return (
    <textarea className="bg-gray-200 h-60 mx-2"
      value={content} 
      onChange={e => setContent(e.currentTarget.value)} 
    />  
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [source, setSource] = useState('今日の天気は晴天ですね。')
  const [target, setTarget] = useState('')
  const [wakati1, setWakati1] = useState('')
  const [wakati2, setWakati2] = useState('')
  const [thumbup1, setThumbup1] = React.useState(false);
  const [thumbdown1, setThumbdown1] = React.useState(false);
  const [thumbup2, setThumbup2] = React.useState(false);
  const [thumbdown2, setThumbdown2] = React.useState(false);

  async function wakati(text: string) {
    const response = await fetch('http://localhost:8000/wakati/?text=' + text);
    const data = await response.json();
    return data.wakati
  }

  async function tenji(text: string) {
    const response = await fetch('http://localhost:8000/tenji/?text=' + text);
    const data = await response.json();
    return data.tenji
  }

  async function sendWakatiEvaluation(source: string, wakati: string, evalutation: string){
    const response = await fetch(`http://localhost:8000/tenji/?text=${text}&wakati=${wakati}&evaluation=${evaluation}`);
    const data = await response.json();
    return data
  }


  useEffect(() => {
    wakati(source).then((data) => {
      setWakati1(data)
      setWakati2(data)
    })
  },[source])

  useEffect(() => {
    tenji(wakati1).then((data) => {
      setTarget(data)
    })
  },[wakati1])

  const theme = useTheme();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            ut.code(); 点字翻訳アプリ 
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="px-2 bg-gray-100">
        <div className="flex my-5 mx-2 px-5">
          <div>
            <textarea className="bg-white-200 h-60 mx-2"
              value={source} 
              onChange={e => setSource(e.currentTarget.value)} 
            />  
          </div>
          <div>
            <textarea className="bg-white-200 h-60 mx-2"
            value={wakati1} 
            onChange={e => setWakati1(e.currentTarget.value)} 
            />  
            <div>元の文</div>
            <div>
            <textarea className="bg-green-100 h-60 mx-2"
            value={wakati2} 
            /> 
            <div className="flex flex-col float-right">
              {thumbdown2 || <ThumbUpOffAlt onClick={()=>{setThumbup2(true)}}/>}
              {thumbup2 || <ThumbDownOffAlt onClick={()=>{setThumbdown2(true)}}/>}        
            </div>
            </div>
          </div>

          <div>
            <textarea className="bg-white-200 h-60 mx-2"
            value={target} 
            onChange={(e) => {setTarget(e.currentTarget.value)}}/>  
          <Button onClick={() => {navigator.clipboard.writeText(target)}}>Copy</Button>
          </div>
          </div>
          <div className="flex mx-2 px-5">
        </div>
        <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
      </div>

    </div>
  )
}

export default App;