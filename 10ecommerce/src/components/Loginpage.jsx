import React, { useState } from 'react'

function Loginpage() {
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    return (
        <div className='flex flex-col '>
            <div className=" bg-gray-300 mt-6 items-center ml-56 w-1/2">
                <img src="/Images/cdatLogo.png" alt="image not found" className='w-36 h-20 text-center items-center cdatimg' />
                <h2>Hey there👋🏻</h2>
            </div>
            <div className='flex flex-col items-center'>
                {/* <div className='flex flex-col text-center items-center'> */}
                    <input
                        type="text"
                        name='name'
                        placeholder='enter name'
                        onChange={(e)=> setName(e.target.value)}
                        className='bg-gray-200 rounded my-2 border-2 px-4'
                    />
                    <input 
                    type="text" 
                    name="password"
                    placeholder='enter passowrd' 
                    onChange={(e)=> setPassword(e.target.value)}
                    className='bg-gray-200 rounded my-2 border-2 px-4 '
                    />
                    
                {/* </div> */}
                <button className='bg-blue-500 rounded px-3 py-1 m-3'>Login</button>
            </div>
        </div>
    )
}

export default Loginpage