import { useState } from 'react'
import './App.css'
import Hook1 from './PracticeHooks/Hook1'
import Hook2bgc from './PracticeHooks/Hook2bgc'
import Hook from './PracticeHooks/Hook'
import HookI from './PracticeHooks/HookI' 
import SampleApi from './PracticeHooks/SampleApi'

function App() {
  const [color, setColor] = useState("red")
  // function chnageColor(){
  //   document.body.backgroundColor = "blue"
  // }

  return (
    <>
      {/* <h1>Default color {color}</h1>
      <button
      type='button'
      className='bg-blue-400 px-4 rounded'
      onClick={()=> setColor("blue")}>
        Blue
      </button> */}
      {/* <Hook1/> */}
      {/* <Hook2bgc/> */}
      {/* <Hook/> */}
      {/* <HookI/> */}
      <SampleApi/>
    </>
  )
}

export default App
