/* eslint-disable react/prop-types */
//This project isn't big enough to care about that- an annoying hint.
//I'd just use TS if I needed that. boooo.
import {useState, useEffect} from 'react'

export default function TypeWriter ({text, speed=25, setChoiceVisibility}) {
    const [renderedText, setRenderedText] = useState('')
    useEffect(() => {
        setRenderedText('')
        setChoiceVisibility(false)
        let index = 0;
        const typeCharacter = () => {
          if (index < text.length -1) {
            setRenderedText((prevText) => prevText + text[index]);
            index++;
            setTimeout(typeCharacter, speed);
            if(index === text.length -1){
                setChoiceVisibility(true)
            }
          }
        }
        typeCharacter();
    }, [text, speed]);

    return <p>{renderedText}</p>
}