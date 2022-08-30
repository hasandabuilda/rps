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

    if ((playerScore.innerText == 5) || (computerScore.innerText == 5)) {
        if (playerScore.innerText > computerScore.innerText) {
            alert("You won the game!");
        }
        else if (computerScore.innerText > playerScore.innerText) {
            alert("You lost the game!");
        }
        else {
            alert("The game was a draw!");
        }
        playerScore.innerText = 0;
        computerScore.innerText = 0;
        roundResult.innerText = "";
    }
}

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => game('rock'));
const paper = document.querySelector("#paper");
paper.addEventListener('click', () => game('paper'));
const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => game('scissors'));