import { useState } from 'react'
import './App.css'

// components
import Slots from './components/Slots'

function App() {
  const [count, setCount] = useState(0);
  const reel1 = ["🍑","🍆","🍒","🛎️","🍫","🍥"];

  return (
    <Slots reel1={reel1}/>
  )
}

export default App
