// variables to keep track of score
let playerScore = 0;
let computerScore = 0;
let tie = 0;

// user clicks yes ==> BUTTONS SHOW UP
const gameContainer = document.querySelector('#gameContainer');
gameContainer.style.display = "none";

const score = document.querySelector('#score');
score.style.display = "none";

const playAgain = document.querySelector('#playAgain');
playAgain.style.display = "none";

const results = document.querySelector('#results');
results.style.display = "none";

const intro = document.querySelector('#intro');
const yesBtn = document.querySelector('#yes');
yesBtn.addEventListener('click', function() {
    hideOrShow(gameContainer);
    hideOrShow(intro);
    hideOrShow(score);
});

// toggles on or off the display of an element
function hideOrShow(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// user clicks no ==> print message "AWWWW, MAYBE NEXT TIME :)"
const noMessage = document.querySelector('#noMessage');
noMessage.style.display = "none";
const noBtn = document.querySelector('#no');
noBtn.addEventListener('click', function() {
    hideOrShow(noMessage);
    hideOrShow(intro);
});

const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
const paper = document.querySelector('#paper');

rock.addEventListener('click', function() {
    let playerSelection = this.id;
    playRound(playerSelection, computerSelection());
});
scissors.addEventListener('click', function() {
    let playerSelection = this.id;
    playRound(playerSelection, computerSelection());
});
paper.addEventListener('click', function() {
    let playerSelection = this.id;
    playRound(playerSelection, computerSelection());
});


// Randomly generates num of 0, 1, or 2. 33% chance generator
function randNum() {
    return Math.floor(Math.random() * 3);
}

// randomly returns either 'ROCK', 'PAPER', or 'SCISSORS'.
// 0 = 'ROCK', 1 = 'PAPER', 2 = 'SCISSORS'
function computerSelection() {
    let computerMove = "";
    switch (randNum()) {
        case 0:
            console.log('rock');
            return 'rock';
        case 1:
            console.log('paper');
            return 'paper';
        case 2:
            console.log('scissors')
            return 'scissors';
        default:
            console.log('Something went wrong!')
    }
}

function updateScore() {
    score.innerText = `PLAYER SCORE:${playerScore} | COMPUTER SCORE:${computerScore} | TIE:${tie}`;
    hideOrShow(results);
    hideOrShow(gameContainer);
    hideOrShow(playAgain);
}



function playerWinProcedure() {
    playerScore += 1;
    updateScore();
}

function computerWinProcedure() {
    computerScore += 1;
    updateScore();
}

// starts a single round of ROCK PAPER SCISSORS between player and computer, then prints out the winner of the round
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('YOU WIN! ROCK BEATS SCISSORS');
        playerWinProcedure();
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('YOU WIN! SCISSORS BEATS PAPER');
        playerWinProcedure();
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('YOU WIN! PAPER BEATS ROCK');
        playerWinProcedure();
    } else if (playerSelection == computerSelection) {
        console.log("IT'S A TIE");
        tie += 1;
        updateScore();
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('YOU LOSE! PAPER BEATS ROCK');
        computerWinProcedure();
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('YOU LOSE! SCISSORS BEATS PAPER');
        computerWinProcedure();
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('YOU LOSE! ROCK BEATS SCISSORS');
        computerWinProcedure();
    } else {
        console.log(playerSelection);
        console.log(computerSelection);
        if (computerSelection == 'scissors') {
            console.log('true');
        }
        console.log('SOMETHING WENT WRONG');
    }
}

// loops the game in a for loop, number of games depend of user
function loopGame(numOfGame) {
    for (let i = 1; i <= numOfGame; i++) {
        console.log(`GAME ${i}:`);
        playRound(playerSelection(), computerSelection());
        printScore();
    }
}

// reset the score
function resetScore() {
    playerScore = 0;
    computerScore = 0;
    tie = 0;
}

function game(numOfGame) {
    loopGame(numOfGame); // loops the game depending on numOfGame
    declareWin(); // prints out the winner
    resetScore(); // resets the score
}

// prints the result depending on the score
function declareWin() {
    if (playerScore > computerScore) {
        console.log('GAME OVER, YOU WIN!');
    } else if (computerScore > playerScore) {
        console.log('GAME OVER, YOU LOSE!');
    } else {
        console.log("GAME OVER, IT'S A TIE!")
    }
}
