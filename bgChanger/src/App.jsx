import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('white')

  const handleClick = (color) => {
    setBgColor(color)
  }

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', padding: '20px' }}>
      <button onClick={() => handleClick('red')}>Red</button>
      <button onClick={() => handleClick('green')}>Green</button>
      <button onClick={() => handleClick('blue')}>Blue</button>
      <button onClick={() => handleClick('yellow')}>Yellow</button>
      <button onClick={() => handleClick('pink')}>Pink</button>
      <button onClick={() => handleClick('black')}>Black</button>
      <button onClick={() => handleClick('purple')}>Purple</button>
    </div>
  )
}

export default App
