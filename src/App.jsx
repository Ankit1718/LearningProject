import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyPage from './Practise'
import  {Exercise1}  from  './Exercise1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2 style={{textalign:'center'}}>Welcome to React World....</h2>

      <Exercise1/>
    
    </>
  )
}

export default App
