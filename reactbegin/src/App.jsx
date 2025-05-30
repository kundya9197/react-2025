import { useState } from 'react'
import './App.css'
import ClassComponent from './State/ClassComponent'
import ImmutableState from './State/ImmutableState'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className='bg-red-600 text-center mt-5 p-5 text-2xl'>
    //   <h2>Count: {count}</h2>
    //   <button className='bg-black text-white px-5 rounded mt-2' onClick={() => setCount(count + 1)}>+</button>
    // </div>
    // <ClassComponent/>
    <ImmutableState/>
  )
}

export default App
