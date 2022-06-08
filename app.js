// variables to keep track of score
let playerScore = 0;
let computerScore = 0;
let tie = 0;

// Randomly generates num of 0, 1, or 2. 33% chance generator
function randNum() {
    return Math.floor(Math.random() * 3);
}

// randomly returns either 'ROCK', 'PAPER', or 'SCISSORS'.
// 0 = 'ROCK', 1 = 'PAPER', 2 = 'SCISSORS'
function computerSelection() {
    switch (randNum()) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            console.log('Something went wrong!')
    }
}

// checks if the player's selection is valid and returns the valid choice
function check(playerChoice) {
    while (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
        playerChoice = prompt('PLEASE ENTER A VALID SELECTION: ROCK, PAPER, OR SCISSORS?').toLowerCase();
    }
    return playerChoice;
}

// allows the player select 'ROCK', 'PAPER', or 'SCISSOR' and returns the choice
function playerSelection() {
    let playerChoice = prompt('ROCK, PAPER, OR SCISSORS?').toLowerCase();
    playerChoice = check(playerChoice);
    return playerChoice;
}

// prints the player score, computer score, and number of ties
function printScore() {
    console.log(`PLAYER SCORE:${playerScore}; COMPUTER SCORE:${computerScore}; TIE:${tie}`);
}

// starts a single round of ROCK PAPER SCISSORS between player and computer, then prints out the winner of the round
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('YOU WIN! ROCK BEATS SCISSORS');
        playerScore += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('YOU WIN! SCISSORS BEATS PAPER');
        playerScore += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('YOU WIN! PAPER BEATS ROCK');
        playerScore += 1;
    } else if (playerSelection == computerSelection) {
        console.log("IT'S A TIE");
        tie += 1;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('YOU LOSE! PAPER BEATS ROCK');
        computerScore += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('YOU LOSE! SCISSORS BEATS PAPER');
        computerScore += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('YOU LOSE! ROCK BEATS SCISSORS');
        computerScore += 1;
    } else (
        console.log('SOMETHING WENT WRONG')
    )
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
