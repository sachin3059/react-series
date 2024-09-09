import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] =  useState(0)
  
  const addValue = () => {
    counter += 1
    setCounter(counter)
  }
  
  const removeValue = () => {
    counter -= 1;
    setCounter(counter)
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button 
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <br />
    <button
    onClick={removeValue}
    >Remove value {counter}</button>
    </>
  )
}

export default App
