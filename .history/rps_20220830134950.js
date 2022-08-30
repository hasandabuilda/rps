function getComputerChoice() {
    let choice = Math.floor(3 * Math.random());
    switch(choice) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    switch(player) {
        case 'rock':
            switch(computer) {
                case 'rock': return "Draw!";
                case 'paper': return "You Lose! Paper beats Rock";
                case 'scissors': return "You Win! Rock beats Scissors";
            }
        case 'paper':
            switch(computer) {
                case 'rock': return "You Win! Paper beats Rock";
                case 'paper': return "Draw!";
                case 'scissors': return "You Lose! Scissors beats Paper";
            }
        case 'scissors':
            switch(computer) {
                case 'rock': return "You Lose! Rock beats Scissors";
                case 'paper': return "You Win! Scissors beats Paper";
                case 'scissors': return "Draw!";
            }
    }
}

function game() {
    let playerWinCount, computerWinCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let roundResult = playRound(playerSelection, getComputerChoice());
        console.log(roundResult);
        if (roundResult.includes("You Win!")) {
            playerWinCount++;
        }
        else if (roundResult.includes("You Lose!")) {
            computerWinCount++;
        }
    }
    if (playerWinCount > computerWinCount) {
        console.log("You won the game!");
    }
    else if (computerWinCount > playerWinCount) {
        console.log("You lost the game!");
    }
    else {
        console.log("The game was a draw!");
    }
}

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => console.log("rock"));

//game();