'use strict';

function decreaseScore(message) {
    document.querySelector(".message").textContent = message;
    score--;
    document.querySelector(".score").textContent = score;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let guess = null;

document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function() {
    // const guess = Number(document.querySelector('.guess').value);
    
    if (document.querySelector('.guess').value != "") {
        guess = Number(document.querySelector('.guess').value);
    } else {
        guess = null;
    }

    if (guess === null) {
        document.querySelector(".message").textContent = "⛔ No number!";
        return
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

        return
    }

    if (score > 1 && guess > secretNumber) {
        decreaseScore("📈 Too high!")
        return
    }

    if (score > 1 && guess < secretNumber) {
        decreaseScore("📉 Too low!");
        return
    }
    
    if (score === 1) {
        decreaseScore("🥀 You lost the game");
        return
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
