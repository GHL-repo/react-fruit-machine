import { useState } from 'react'
import './App.css'

function App() {
  const [reels, setReels] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameResult, setGameResult] = useState("");
  const reel1 = ["🍑","🍆","🍒","🛎️","🍫","🍥"];
  const reel2 = ["🍑","🍆","🍒","🛎️","🍫","🍥","🍥","🍥","🍥","🍥","🍥"];
  // const reel3 = ["🍑","🍆","🍒","🛎️","🍫","🍥"];

  const clearReels = () => {
    setReels([]);
    setGameOver(false);
  }

  const checkIfWon = () => {
    if (reels.every(symbol => symbol === reels[0])) {
      setGameResult("won")
    } else {
      setGameResult("lost")
    }
  }

  const pickSymbol = (reel) => {
      let randomSymbol = reel[Math.floor(Math.random() * reel.length)]
      setReels(reels => [...reels, randomSymbol])
      
      if (reels.length+1 === 3) {
        setGameOver(true);
        checkIfWon();
      }
  }

  return (
    <div className='container'>
      { !gameOver && (
        <div>
          <h1>Fruitmeister 3000</h1>
          <h1>{reels}</h1>
          <button
            onClick={() => pickSymbol(reel2)}
          >
            Click me!
          </button>
        </div> )
      }
      {
        gameOver && (
        <div>
          <h1>Game Over! You {gameResult}!</h1>
          <h1>{reels}</h1>
          <button onClick={() => clearReels()}>Play Again</button>
        </div> )
      }
    </div>
  )
}

export default App
