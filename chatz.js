const chatbotResponses = {
"hello" : " Hi There",
"how are you" : "I do not know because I am not human",
"bye":"Fairwell",
"defult": "No comprendo"

};

function handleUserInput(event) {
  if(event.key=="Enter"){
    const userInput = document.getElementById("userInput").value;
    const chat = document.getElementById("chat");

  document.getElementById("userInput").value="";
  chat.innerHTML +=`<p><strong>You:</strong> ${userInput}</p>`;
  const response = chatbotResponses[userInput.toLowerCase()]|| chatbotResponses["default"];
  chat.innerHTML +=  `<p><strong>Chiken:</strong> ${response}</p>;
}}
