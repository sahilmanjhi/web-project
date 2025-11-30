const words = [
    { word: "apple", hint: "A red or green fruit" },
    { word: "elephant", hint: "Largest land animal" },
    { word: "computer", hint: "An electronic machine" },
    { word: "river", hint: "A natural water stream" }
];

let selected = words[Math.floor(Math.random() * words.length)];
let hiddenWord = selected.word;
let hint = selected.hint;

document.getElementById("hint").innerHTML = "Hint: " + hint;

let displayedWord = Array(hiddenWord.length).fill("_");
let wrongGuesses = [];

document.getElementById("wordDisplay").innerText = displayedWord.join(" ");

function guessLetter() {
    let letter = document.getElementById("inputLetter").value.toLowerCase();
    document.getElementById("inputLetter").value = "";

    if (!letter.match(/[a-z]/)) {
        alert("Enter a valid letter!");
        return;
    }

    if (displayedWord.includes(letter) || wrongGuesses.includes(letter)) {
        alert("You already guessed this letter!");
        return;
    }

    let correct = false;

    for (let i = 0; i < hiddenWord.length; i++) {
        if (hiddenWord[i] === letter) {
            displayedWord[i] = letter;
            correct = true;
        }
    }

    if (!correct) {
        wrongGuesses.push(letter);
        document.getElementById("wrongLetters").innerText = wrongGuesses.join(", ");
    }

    document.getElementById("wordDisplay").innerText = displayedWord.join(" ");

    if (!displayedWord.includes("_")) {
        alert("🎉 Congratulations! You guessed the word: " + hiddenWord);
        location.reload();
    }
}
