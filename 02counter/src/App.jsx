import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // counter is a variable and setCounter is a method which is use to updates the value of counter
  let [counter, setCounter] = useState(15)

  // function to add value in button
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
    // console.log("Clicked", counter);

    // or
    // setCounter(counter + 1)
  }
  // function to remove value in button
  const removeValue = () => {
    // counter = counter - 1
    // setCounter(counter)
    // or
    
    setCounter(counter - 1)
  }
  // removeValue>=0 && addValue<=20
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button><br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
