import '../styles/Conversation.css'
import {useState, useEffect} from 'react'

export default function PasswordEntry () {
    const [inputValue, setInputValue] = useState('')
    const [submitLock, setSubmitLock] = useState(false)
    const handleSubmit = (event) => {
      event.preventDefault()
      if(submitLock){return}
      if (inputValue === '8u8u') {
        //window.open('https://marcusd.dev')
        console.log('navigated to marcusd.dev')
      } else if (inputValue === 'ijij') {
        //window.open('https://netlify site')
        console.log('navigated to netlify site')
      } else {
        return
      }
      setSubmitLock(true)
    }
    useEffect(()=>{
      if (submitLock === true) {
        setTimeout(()=> setSubmitLock(false), 3000)
      }
    }, [submitLock])

    return (
        <form>
        <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Enter the key" 
            aria-label="Enter the key"
            className= "usertalk"
            onChange={e => setInputValue(e.target.value)}
          />
          <button 
            className= "submitspeech"
            onClick={handleSubmit}
          > submit </button>
          </form>
    )
}