const words = [
// The boys 😂
"Fran",
"Andres",
"Alex",
"Dragos",
"Ms Kennedy",
"Elise",

// Sports ⚽
"Football",
"Basketball",
"Tennis",
"Volleyball",
"Rugby",
"Boxing",
"Swimming",
"Golf",
"Badminton",
"Formula 1",

// Funny stuff 💀
"Chicken Nugget",
"Skibidi",
"Broccoli Hair",
"Professional Napper",
"Walking L",
"NPC",
"Brainrot",
"Certified Yapper",
"Skill Issue",
"Emotional Damage",
"Wifi Warrior",
"Potato",
"Monkey Business",
"Goofy Ahh",
"Crying in 4K",
"Bro Forgot",
"Zero Aura",
"Final Boss",
"Lagging IRL",
"Keyboard Warrior",
"Suspicious Hamster",
"Chicken CEO",
"Unpaid Intern",
"Absolute Donkey",
"Bro Thinks He Is Him",
"Professional Yapper",
"Lost in the Tutorial",
"Bro Has No WiFi",
"Walking Calculator",
"CEO of Sleeping",
"NPC Dialogue",
"Certified Clown",
"Bro Is Cooked",
"Main Character Syndrome",
"Expired Yogurt",
"Shrek's Cousin"

];

function generateRandomWord() {
const wordDisplay = document.getElementById("wordDisplay");

if (!wordDisplay) {
    return;
}

let randomIndex;
let randomWord;

do {
    randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
} while (words.length > 1 && randomWord === wordDisplay.innerText);

wordDisplay.innerText = randomWord;

}
