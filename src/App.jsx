
import './App.css'
import { useState } from 'react'
import ScreenScene from './ScreenScene'



export default function App() {
  const [showInput, setShowInput] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = () => {
    //fetch request here, whenready
    console.log('submitted value:', inputValue);
  }
  return (
    <main className='main'>
      <nav>
        <div className='formatNav'>
          <button onClick={() => setShowInput(!showInput) } tabIndex={0} type='button'>Bypass</button>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Enter the password" 
            aria-label="Enter the password"
            className={showInput ? 'visible' : 'hidden'}
            onChange={e => setInputValue(e.target.value)}
          />
          <button 
            className={showInput ? 'visible' : 'hidden'} 
            onClick={handleSubmit}
          > submit
          </button>
        </div>
      </nav>
      <div className='canvas'>
      <ScreenScene />
      </div>
    </main>
  )
}
