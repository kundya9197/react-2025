import Chai from "./chai"

function App() {
    const username = "Chai aur code"
  return (
    <>
      <Chai />
      <h1>Chai aur react {username}</h1>
      {/* {username} - this is called expression / evaluated expression 
      means we didn't wirte whole javascript we just write the final outcome*/}
    </>
  )
}

export default App
