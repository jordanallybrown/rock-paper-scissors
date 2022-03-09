const ROCK = 'rock', PAPER = 'paper', SCISSORS = 'scissors';
const ITEMS = [ROCK, PAPER, SCISSORS];
const DEFAULT_ROUNDS = 5;

function computerPlay(){
    let index = Math.floor(Math.random() * ITEMS.length);
    return ITEMS[index];
}

function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection) {
        console.log(`It's a tie! You both are ${playerSelection}`);
        return false;
    }

    let isWinner;
    switch (playerSelection.toLowerCase()) {
        case ROCK:
            isWinner = computerSelection === SCISSORS ? true : false;
            break;
        case SCISSORS:
            isWinner = computerSelection === PAPER ? true : false;
            break;
        case PAPER:
            isWinner = computerSelection === ROCK ? true : false;
            break;
        default:
            isWinner = false; // invalid input from user
    }

    
    if (isWinner) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }

    return isWinner;
   
}

function game(numOfRounds = DEFAULT_ROUNDS ){
    let playerScore = 0, 
        computerScore = 0,
        playerSelection,
        computerSelection,
        isPlayerWinner;
    
    for (let i = 1; i < numOfRounds + 1; i++) {
        computerSelection = computerPlay();
        playerSelection = prompt('Choose rock, paper, or scissors:');
        console.log(`You picked ${playerSelection} and the computer picked ${computerSelection}`);
        isPlayerWinner = playRound(playerSelection, computerSelection);

        if (isPlayerWinner) {
            playerScore++;
        } else {
            if (playerSelection !== computerSelection) {
                computerScore++;
            } 
        }
        console.log(`Round ${i}: Your score: ${playerScore} | Computer score: ${computerScore}`);

    }
    console.log('Great game! Thanks for playing.');
}

game();

// const playerSelection = 'rOcK';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));