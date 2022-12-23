import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [reels, setReels] = useState([]);
  const [reelDisplay, setReelDisplay] = useState(["⬜️","⬜️","⬜️"]);
  const [gameOver, setGameOver] = useState(false);
  const [gameResult, setGameResult] = useState("");
  // One reel for now
  const reelArr = ["🍑","🍆","🍒","🛎️","🍫","🍥","🍥","🍥","🍥","🍥","🍥"];

  // Listen if the game has ended
  useEffect(() => {
    console.log("length after: " + reels.length)
    if (reels.length === 3) {
      setGameOver(true);
      checkIfWon();
    }
  },[reels])

  const clearReels = () => {
    setReels([]);
    setReelDisplay(["⬜️","⬜️","⬜️"]);
    setGameOver(false);
    setGameResult("");
  }

  const checkIfWon = () => {
    // TODO: useEffect js confetti if won
      if (reels.every(symbol => symbol === reels[0])) {
      setGameResult("won")
    } else {
      setGameResult("lost")
    }
    setGameOver(true);
  }

  const updateDisplay = (randomSymbol) => {
    const newDisplay = [...reelDisplay];
    newDisplay.splice(newDisplay.indexOf("⬜️"), 1, randomSymbol)
    setReelDisplay(newDisplay);
  }

  const pickSymbol = (reel, symbolCount) => {
    // If the reels have not stopped
    if (reels.length !== 3) {
      // Pick a random symbol from the reel
      let randomSymbol = reel[Math.floor(Math.random() * reel.length)]

      // Update the game state with random symbol
      setReels(reels => [...reels, randomSymbol]);

      // Update the display state
      updateDisplay(randomSymbol);
    }
  }

  return (
    <div className='container'>
      <h1>Fruitmeister 3000</h1>
      { // Game over screen
        gameOver 
        ? (
        <div>
          <h1>{reelDisplay}</h1>
          <h2>Game Over! You {gameResult}!</h2>
          <button onClick={() => clearReels()}>Play Again?</button>
        </div> 
        ) 
        // Play the game if it ain't over
        : ( 
        <div>
          <h1>{reelDisplay}</h1>
          <h2>Let's play!</h2>
          <button
            onClick={() => pickSymbol(reelArr)}
          >
            Hit me!
          </button>
        </div> 
        )
      }
    </div>
  )
}

export default App
