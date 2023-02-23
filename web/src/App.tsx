import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [source, setSource] = useState('今日の天気は晴天ですね。')
  const [target, setTarget] = useState('')
  const [wakati, setWakati] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/translate/?text=' + source)
      .then(response => response.json())
      .then(data => {setTarget(data.target); setWakati(data.wakati);})
  }, [source, target])

  return (
    <div className="App">
      {/* <p className="text-sky-400/100">The quick brown fox...</p> */}

      <button>文章を入力する</button>
      <button>ファイルを入力する</button>
      <form method="get">
        <label htmlFor="text">Text to translate:</label>
        <input onChange={(e) => {setSource(e.target.value)}} value={source} type="text" id="text" name="text" />
      </form>
      <div>
        <p>Wakati text: {wakati}</p>
        <p>Translated text: {target}</p>
      </div>

    </div>
  )
}

export default App
