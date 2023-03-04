import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { ThumbUpOffAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';


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


  return (
    <div className="App">
    <div className="px-2">

  <div className="flex mx-2 px-5">
    <div>
      <textarea className="bg-gray-100 h-60 mx-2"
        value={source} 
        onChange={e => setSource(e.currentTarget.value)} 
      />  
    </div>
    <div>
      <textarea className="bg-gray-100 h-60 mx-2"
      value={wakati1} 
      onChange={e => setWakati1(e.currentTarget.value)} 
      />  
      {/* 左に詰める css */}
      {/* <div className="flex flex-col float-right">
        {thumbdown1 || <ThumbUpOffAlt onClick={()=>{setThumbup1(true); sendWakatiEvaluation(source, wakati1, '1'); }}/>}
        {thumbup1 || <ThumbDownOffAlt onClick={()=>{setThumbdown1(true); sendWakatiEvaluation(source, wakati1, '-1');}}/>}        
      </div> */}
      <div>元の文</div>
      <textarea className="bg-gray-100 h-60 mx-2"
      value={wakati2} 
      // onChange={e => setWakati2(e.currentTarget.value)} 
      /> 
      <div className="flex flex-col float-right">
        {thumbdown2 || <ThumbUpOffAlt onClick={()=>{setThumbup2(true)}}/>}
        {thumbup2 || <ThumbDownOffAlt onClick={()=>{setThumbdown2(true)}}/>}        
      </div>
    </div>

    <div>
        <textarea className="bg-gray-100 h-60 mx-2"
      value={target} 
      onChange={e => setTarget(e.currentTarget.value)} 
    />  
    </div>
    </div>
    {/* make good button and bad button */}
    <div className="flex mx-2 px-5">
  </div>
</div>

    </div>
  )
}

export default App;