import {useState} from 'react'
import '../styles/Conversation.css'
import graph from '../utils/dialogueData'
import PasswordEntry from './PasswordEntry'
import TypeWriter from './TypeWriter'

export default function Conversation ({setAnimationIndex}){
    const [currentNode, setCurrentNode] = useState(1);
    const [choiceVisibility, setChoiceVisibility] = useState(false)
    const speech = graph[currentNode]
    const entry = speech.input ? <PasswordEntry />: null;
    const responsemap = speech.responses.map((response, index)=> {
        if (response.linkedin === true){
            return (
                <a key={index} href="linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="open new linked in tab" className='usertalk'>
                    {response.text}
                </a>
                )}
        else {return (
        <button key={index} className='usertalk' onClick={response.dance ? ()=> setAnimationIndex(0) : ()=> setCurrentNode(response.nextNode)}>
            {response.text}
        </button>
        )}
    
    })

    return(
        <div className="stableTextContainer">
            <div className="speechbubble" >
                <TypeWriter text={speech.talk} setChoiceVisibility={setChoiceVisibility}/>
            </div>
           
            <div className="buttonsContainer" style={{opacity: choiceVisibility ? 1 : 0}}>
                {entry}
                {responsemap}
            </div>
        </div>
    )
}