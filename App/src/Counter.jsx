import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(1)

  function increment()
  {
    setCount(count+1)
  }
  function decrement()
  {
    setCount(count-1)
         
  }
  function reset()
  {
    setCount(count=0)
  }

  return (
    <>
    <h1>Counter App</h1>
    <h4>{count}</h4>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>


    </>
  )
}

export default App
