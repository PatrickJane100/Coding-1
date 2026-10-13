const chatbotResponses = {
"hello": "Hi there!",
"hi": "Hey! Welcome to Chiken Chatbot!",
"hey": "Hey there! What is up?",
"how are you": "I do not know because I am not human!",
"what is your name": "My name is Chiken!",
"who are you": "I am Chiken, your friendly chatbot!",
"what can you do": "I can answer simple questions and chat with you!",
"joke": "Why did the chicken cross the road? To get to the other side!",
"chicken": "BAWK BAWK! I love chickens!",
"help": "Try saying hello, asking my name, or asking me for a joke!",
"thank you": "You are welcome!",
"thanks": "No problem!",
"good morning": "Good morning! Have a great day!",
"good night": "Good night! Sleep well!",
"bye": "Farewell! See you next time!",
"default": "Sorry, I do not understand. Try another message!"
};

function handleUserInput(event) {
if (event.key === "Enter") {
sendMessage();
}
}

function sendMessage() {
const userInput = document.getElementById("userInput");
const chat = document.getElementById("chat");

const message = userInput.value.trim();

if (message === "") {
    return;
}

const userMessage = document.createElement("p");
const userLabel = document.createElement("strong");
userLabel.textContent = "You: ";
userMessage.appendChild(userLabel);
userMessage.appendChild(document.createTextNode(message));
chat.appendChild(userMessage);

const response = chatbotResponses[message.toLowerCase()]
    || chatbotResponses["default"];

const botMessage = document.createElement("p");
const botLabel = document.createElement("strong");
botLabel.textContent = "Chiken: ";
botMessage.appendChild(botLabel);
botMessage.appendChild(document.createTextNode(response));
chat.appendChild(botMessage);

userInput.value = "";
userInput.focus();
chat.scrollTop = chat.scrollHeight;

}
