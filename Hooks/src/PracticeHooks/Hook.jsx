import React, { useEffect, useState } from 'react'

function Hook() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    setTimeout(()=> {
      setCount((count)=> count + 1)
    },1000)
  },[])
  return (
    <div>I have reder {count} times</div>

  )
}

export default Hook