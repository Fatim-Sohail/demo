import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Course from './components/Course'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Course/>
    </>
  )
}

export default App
