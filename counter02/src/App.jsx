import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    //setCounter(counter +1)   only 1 se increment hoga this is use for simple one increment withou call back
    setCounter(prevCounter => prevCounter +1) // yaha pe callback se prev state ka counter liya gya hai
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    // now direct 4 se increment 4 add value me
  }

  const removeValue = () => {
    setCounter(counter -1)
  }

  return (
    <>
    <button
    onClick={addValue}
    >Add value {counter}
    </button>

    <br />

    <button
    onClick={removeValue}
    > remove value {counter}
    </button>

    </>
  )
}

export default App
