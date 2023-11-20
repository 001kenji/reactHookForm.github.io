import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logger from './JS/AdvancedLogger'
import Questionnaire from './JS/questionnaire'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 id='sticker' className='text-white flex sticky top-0  bg-emerald-500  border-2 rounded-md p-2 font-bold font-serif'>Advanced Login Form  <span>React Hook Form</span> </h1>
    <div className='border-2 bg-slate-300 text-black p-4 flex justify-center'><Logger /></div>
    <h1 id='sticker' className='text-white flex sticky top-0   bg-emerald-500  border-2 rounded-md p-2 font-bold font-serif'>Questionnaire Form  <span>React Hook Form</span> </h1>
    <div className='border-2 bg-slate-300 text-black p-4 grid justify-center'><Questionnaire /></div>
    
    </>
  )
}

export default App
