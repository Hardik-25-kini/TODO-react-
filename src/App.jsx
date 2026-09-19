import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Main from './components/main'


function App() {
  const [showInput, setShowInput] = useState(false)

  return (
    <>
      <Navbar setShowInput={setShowInput}/>
      <Main showInput={showInput} setShowInput={setShowInput} />
    </>
  )
}

export default App
