
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
          {text: 'How do I get one?', nextNode: 11},
          { text: "Actually, I don't know it.", nextNode: 5 },
        ]
      },
      4: {
        talk: 'YYou\'re in luck, then, because I was in charge of collecting his finest samples. What\'s your samples key?',
        input : true,
        responses: [
          {text: 'How do I get one?', nextNode: 11},
          {text: "Actually, I don't know it.", nextNode: 5 },
        ]
      },
      5: {
        talk: 'OOkay, okay. Right. Gotcha.',
        input : false,
        responses: [
          {text: 'I do have a portfolio key. Want to hear it?', nextNode: 10},
          {text: "I do have a samples key. Want to hear it?", nextNode: 10 },
          {text: "Dance. DANCE, I say.", nextNode: 8, dance: true },
          
        ]
      },
      6: {
        talk: 'II\'m a doctoral student with an expired pilot\'s license. I\'m writing a thesis on cryptids- bigfoots, chupacabras.',
        input : false,
        responses: [
          {text: 'And where are we?', nextNode: 7},
          {text: "Very well. (go back)", nextNode: 9 },
          
        ]
      },
      7: {
        talk: 'PProbably the Everglades. Definitely not Kansas.',
        input : false,
        responses: [
          {text: 'And who are you?', nextNode: 6},
          {text: "Very well. (go back)", nextNode: 9 },
          
        ]
      },
      8: {
        talk: 'PPlease don\'t ask me to do that again. I\'m pathologically obedient.',
        input : false,
        responses: [
          {text: 'AGAIN!', nextNode: 8, dance: true},
          {text: "Very well. (go back)", nextNode: 9},
          
        ]
      },
      9: {
        talk: 'WWhat now?',
        input : false,
        responses: [
          {text: 'I want to see his dev work', nextNode: 10},
          {text: "I want to see his writing samples.", nextNode: 10 },
          {text: "Point me to LinkedIn (opens new tab).", nextNode: 10, linkedin: true },
          {text: "Dance. DANCE, I say.", nextNode: 8, dance: true },
          
        ]
      },
      10: {
        talk: 'WWhat\'s your key?',
        input : true,
        responses: [
          {text: 'I lied.', nextNode: 9},
        ]
      },
      11: {
        talk: 'HHe\'ll give you one over LinkedIn if you haven\'t already seen one in a resume or application.',
        input : false,
        responses: [
          {text: 'Point me to LinkedIn (opens new tab)', nextNode: 10, linkedin: true},
          {text: 'Very well. (go back)', nextNode: 9},
        ]
      },
}

export default graph