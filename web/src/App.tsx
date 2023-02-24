import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'

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
  const [wakati, setWakati] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/translate/source/?text=' + source)
      .then(response => response.json())
      .then(data => {setTarget(data.target); setWakati(data.wakati);})
  }, [source])

  useEffect(() => {
    fetch('http://localhost:8000/translate/wakati/?text=' + wakati)
      .then(response => response.json())
      .then(data => {setTarget(data.target); setSource(data.source);})
  }, [wakati])

  return (
    <div className="App">
    <div className="px-2">
    <div className="flex mx-2 px-5">
    <textarea className="bg-gray-100 h-60 mx-2"
      value={source} 
      onChange={e => setSource(e.currentTarget.value)} 
    />  
        <textarea className="bg-gray-100 h-60 mx-2"
      value={wakati} 
      onChange={e => setWakati(e.currentTarget.value)} 
    />  
        <textarea className="bg-gray-100 h-60 mx-2"
      value={target} 
      onChange={e => setTarget(e.currentTarget.value)} 
    />  
    </div>
  </div>



    </div>
  )
}

export default App
