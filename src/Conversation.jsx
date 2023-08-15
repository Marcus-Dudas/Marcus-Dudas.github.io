import {useState} from 'react'
import './Conversation.css'

export default function Conversation (){
    const [currentNodeId, setCurrentNodeId] = useState(1);
    const speech = graph[currentNodeId]

    //on key={index}... COME AT ME BRO. No order or changes. ;)
    return(
        <div className="stableTextContainer">
            <div className="speechbubble">
                {speech.talk}
            </div>
            <div className="buttonsContainer">
                { speech.responses.map((response, index)=> (
                <button key={index} className='usertalk' onClick={()=> setCurrentNodeId(response.nextNodeId)}>
                    {response.text}
                </button>
                ))}
            </div>
        </div>
    )
}

const graph ={
    1: {
        id: 1,
        talk: (
                <p>Are you lost, too?</p>
                ),
        responses: [
          { text: "\"Option 1\"", nextNodeId: 2 },
          { text: "\"Option 2\"", nextNodeId: 2 }
        ]
      },
      2: {
        id: 1,
        talk: (
            <p>What are you doing in this part of the world?</p>
            ),
        responses: [
          { text: "Option 1", nextNodeId: 1 },
          { text: "Option 2", nextNodeId: 1 }
        ]
      }
}