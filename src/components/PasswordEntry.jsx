import '../styles/Conversation.css'
import {useState, useEffect} from 'react'

export default function PasswordEntry () {
    const [inputValue, setInputValue] = useState('')
    const [submitLock, setSubmitLock] = useState(false)
    const handleSubmit = (event) => {
      event.preventDefault()
      //fetch request here, when ready
      if(submitLock){return}
      console.log('submitted value:', inputValue);
      setSubmitLock(true)
    }
    useEffect(()=>{
      if (submitLock === true) {
        //Replace time delay with http status SUCCESS
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