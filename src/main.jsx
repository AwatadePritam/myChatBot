// src/main.js
import { findClosestQuestion } from './js/chatbot.js';

// Explicitly assign getAnswer to the window object
window.getAnswer = function() {
  const userInput = document.getElementById("userQuestion").value;
  const answer = findClosestQuestion(userInput);
  document.getElementById("output").innerText = answer;
};
