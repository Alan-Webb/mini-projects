// JS Representation from DOM
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// Word list
const words = [
	"sigh",
	"tense",
	"airplane",
	"ball",
	"pies",
	"juice",
	"warlike",
	"bad",
	"north",
	"dependent",
	"steer",
	"silver",
	"highfalutin",
	"superficial",
	"quince",
	"eight",
	"feeble",
	"admit",
	"drag",
	"loving",
];

// Global Vars
let randomWord;
let score = 0;
let time = 10;

// Focus on text on start
text.focus();

// Generate random word from array
function getRandomWord() {
	return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
	randomWord = getRandomWord();
	word.innerHTML = randomWord;
}

// Update score
function updateScore() {
	score++;
	scoreEl.innerHTML = score;
}

// Event listeners

// Typing
text.addEventListener("input", (e) => {
	const insertedText = e.target.value;

	if (insertedText === randomWord) {
		addWordToDOM();
		updateScore();

		// Clear
		e.target.value = "";

		if (difficulty === "hard") {
			time += 2;
		} else if (difficulty === "medium") {
			time += 3;
		} else {
			time += 5;
		}

		updateTime();
	}
});

// Settings btn click
settingsBtn.addEventListener("click", () => settings.classList.toggle("hide"));

// Settings select
settingsForm.addEventListener("change", (e) => {
	difficulty = e.target.value;
	localStorage.setItem("difficulty", difficulty);
});
