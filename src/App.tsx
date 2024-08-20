import { useState } from 'react'
import './App.css'
import { Button } from './stories/components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        App
       </h1>
       <p>{count}</p>
       <Button onClick={() => setCount((c) => c+1)} label='increase'/>
    </>
  )
}

export default App
