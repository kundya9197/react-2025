import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import DogBreeds from './components/DogBreeds'
import CustomData from './components/CustomData'
import NewNavbar from './components/NewNavbar'
import Loginpage from './components/Loginpage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Navbar/> */}
     {/* <DogBreeds/> */}
     {/* <CustomData/> */}
     {/* <NewNavbar/> */}
     <Slider/>
     {/* <Loginpage/> */}
     

    </>
  )
}

export default App
