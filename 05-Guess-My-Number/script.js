'use strict';

function decreaseScore(message) {
    document.querySelector(".message").textContent = message;
    score--;
    document.querySelector(".score").textContent = score;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function() {
    // const guess = Number(document.querySelector('.guess').value);
    
    if (document.querySelector('.guess').value === "") {
        document.querySelector(".message").textContent = "⛔ No number!";
    } else {
        const guess = Number(document.querySelector('.guess').value);
    }

    if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct number!";
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }

    if (score === 1 && guess != secretNumber) {
        decreaseScore("🥀 You lost the game");
    }

    if (score > 1 && guess > secretNumber) {
        decreaseScore("📈 Too high!")
    }

    if (score > 1 && guess < secretNumber) {
        decreaseScore("📉 Too low!");
    }
})

/////////////////////////////////////////////////////////
// Coding Challenge #1: implement the game reset functionality

document.querySelector(".again").addEventListener("click", function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";

    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222";
})
