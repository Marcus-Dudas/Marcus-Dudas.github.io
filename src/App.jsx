
import './App.css'
import { useState, useEffect } from 'react'
import ScreenScene from './components/ScreenScene'



export default function App() {
  const [showInput, setShowInput] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [eyesOpen, setEyesOpen] = useState(false)
  const [styleIndex, setStyleIndex] = useState({ zIndex: 10 })
  const handleSubmit = () => {
    //fetch request here, whenready
    console.log('submitted value:', inputValue);
  }

  useEffect(()=>{
    setTimeout(()=>{
      setEyesOpen(true)
    }, 2000)
    setTimeout(()=>{
      setStyleIndex({zIndex: -10})
    }, 3500)
  }, [])

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
          <a href="https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="open new linked in tab" className={showInput ? 'visible' : 'hidden'} >
            LinkedIn
          </a>
        </div>
      </nav>
      <div className="eyelids" style={styleIndex}>
          <div className="lid" style={{height: eyesOpen ? '12%' : '50%', boxShadow: eyesOpen ? 'none' : '0px 0px 15px 10px rgba(0, 0, 0, 1)'}}></div>
          <div className="lid" style={{height: eyesOpen ? '12%' : '50%',  boxShadow: eyesOpen ?'none' : '0px 0px 15px 10px rgba(0, 0, 0, 1)'}}></div>
      </div>
      <div className='canvas'>
        
      <ScreenScene />
      </div>
    </main>
  )
}
