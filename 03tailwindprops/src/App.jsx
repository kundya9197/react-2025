import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "kundan",
    age: 23
  }
  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-4 mb-5'>Tailwind css</h1>
      <Card username="hitesh" price = "rupees"/>
      <Card username="kundan" price = "USD"/>
    </>
  )
}

export default App
