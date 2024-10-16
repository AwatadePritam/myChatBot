// src/js/chatbot.js

const qaPairs = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
  ];
  
  export function cleanString(str) {
    return str.toLowerCase().replace(/[^\w\s]/gi, ''); 
  }
  
  export function findClosestQuestion(userQuestion) {
    let maxMatches = 0;
    let bestAnswer = "Sorry, I don't understand your question.";
  
    qaPairs.forEach(pair => {
      const cleanedUserQuestion = cleanString(userQuestion).split(' ');
      const cleanedPredefinedQuestion = cleanString(pair.question).split(' ');
  
      const commonWords = cleanedUserQuestion.filter(word => cleanedPredefinedQuestion.includes(word));
      const matchCount = commonWords.length;
  
      if (matchCount > maxMatches) {
        maxMatches = matchCount;
        bestAnswer = pair.answer;
      }
    });
  
    return bestAnswer;
  }
  