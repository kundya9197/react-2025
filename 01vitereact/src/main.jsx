import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// this code will not work due to improper syntax
// const reactElement = {
//     type : 'a',
//     props :{
//         href : 'https://google.com',
//         target: '_blank',
//     },
//     childern : 'Click me to visit google'
// }

// this will work
// const anotherElement =(
//     <a href="https://google.com" target='_blank'>visit google</a>
// )

// this anotherUser acts as a variable/ evaluated expression
// we can pass it into the object like below
const anotherUser = "chai aur code"
// create a object with react in this format this will work -this will automatically inject by babel
// follow this format to create object with react
const reactElement = React.createElement(
    'a', // give element name
    {href:'https://google.com', target:'_blank'}, // give attribute if you want to set any attribute or give empty object{} -but this is compulsary 
    'click me to visit google', // childern (text)
    anotherUser // evaluated expression
    // this will work behind the scene in react 
)
createRoot(document.getElementById('root')).render(
  
    // <App />
    reactElement
    // anotherElement
    // reactElement
)
