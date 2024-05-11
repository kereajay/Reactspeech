import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dictaphone from './Dictaphone.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer />
      <div >
        <h1 className='text-5xl font-bold  text-center'>Speech to Text Converter</h1>
        <br />
        <p className='text-lg text-gray-500 text-center'>A React hook that converts speech from the microphone to text and makes it <br /> available to your React components.</p>
        <br />
        <br />
        <Dictaphone />
      </div>
    </>
  )
}

export default App
