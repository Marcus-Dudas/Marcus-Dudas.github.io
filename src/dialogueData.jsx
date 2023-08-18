
const graph ={
    1: {
        talk:
          ".... Hi. Are you lost, too? I crashed my plane searching for the elusive Mister Dudas. What are you doing here?"
                ,
        
        responses: [
          { text: "\"I'm searching for his dev work.\"", nextNode: 3 },
          { text: "\"I'd like to laugh at his writing samples.\"", nextNode: 4 },
          { text: "\"I'm sorry, who are you?\"", nextNode: 6 },
          { text: "\"Wait- where are we?\"", nextNode: 7 },
        ]
      },
      2: {
        talk: (
            <p>What are you doing in this part of the world?</p>
            ),
        
        responses: [
          { text: "Option 1", nextNode: 1 },
          { text: "Option 2", nextNode: 1 },
        ]
      },
      3: {
        talk: 'SSo you have the key to his portfolio? Fascinating! What is it?',
        
        input : true,
        responses: [
          { text: "Actually, I don't know it.", nextNode: 5 },
        ]
      },
      4: {
        talk: 'YYou\'re in luck, then, because I was in charge of collecting his finest samples. What\'s your samples key?',
        input : true,
        responses: [
          {text: 'How do I get one?', nextNode: 1},
          {text: "Actually, I don't know it.", nextNode: 5 },
        ]
      },
      5: {
        talk: 'OOkay, okay. No worries. What now, though?',
        input : false,
        responses: [
          {text: 'I do have a portfolio key. Want to hear it?', nextNode: 1},
          {text: "I do have a samples key. Want to hear it?", nextNode: 1 },
          {text: "Dance. DANCE, I say.", nextNode: 1 },
          
        ]
      },
      6: {
        talk: 'OOh, just a PhD student with a pilot\'s license. I\'m writing a thesis on cryptids- you know, bigfoots, chupacabras. Hence my search.',
        input : false,
        responses: [
          {text: 'I do have a portfolio key. Want to hear it?', nextNode: 1},
          {text: "I do have a samples key. Want to hear it?", nextNode: 1 },
          {text: "Dance. DANCE, I say.", nextNode: 1 },
          
        ]
      },
      7: {
        talk: 'Probably the Everglades. Definitely not the place we meant to reach.',
        input : true,
        responses: [
          {text: 'I do have a portfolio key. Want to hear it?', nextNode: 1},
          {text: "I do have a samples key. Want to hear it?", nextNode: 1 },
          {text: "Dance. DANCE, I say.", nextNode: 1 },
          
        ]
      },
}

export default graph