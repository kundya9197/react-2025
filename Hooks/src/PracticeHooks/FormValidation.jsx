import React, { useState,props } from 'react'

function FormValidation(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div className='flex flex-col p-4  items-center bg-amber-200'>
    <input type="text" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='enter email'   
    />    
    <input type="text"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='enter passowrd'
    /> 
    <button className='bg-blue-600 rounded p-2'>Login {props.name}</button>
    </div>
)
}

export default FormValidation;