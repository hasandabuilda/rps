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

function game(playerSelection) {
    let playerScore = document.querySelector('#player-score');
    let computerScore = document.querySelector('#computer-score');
    let roundResult = document.querySelector('#round-result');

    let result = playRound(playerSelection, getComputerChoice());
    roundResult.innerText = result;

    if (result.includes("You Win!")) {
        playerScore.innerText++;
    }
    else if (result.includes("You Lose!")) {
        computerScore.innerText++;
    }

    if ((+playerScore.innerText + +computerScore.innerText) == 5) {
        if (playerWinCount > computerWinCount) {
            alert("You won the game!");
        }
        else if (computerWinCount > playerWinCount) {
            alert("You lost the game!");
        }
        else {
            alert("The game was a draw!");
        }
        playerScore.innerText = 0;
        computerScore.innerText = 0;
    }
}

function printId() {
    console.log(this.id);
}

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
const paper = document.querySelector("#paper");
paper.addEventListener('click', printId);
const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', printId);