import React, { useState } from 'react'

function FunctionalState() {
    // Counter
    const [count, setCount] = useState(0)

    const increment =()=>{
        setCount(count + 1);
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default FunctionalState;