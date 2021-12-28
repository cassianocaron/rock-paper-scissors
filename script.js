let computerScore = 0;
let humanScore = 0;
let roundsPlayed = 0;

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let humanSelection = button.id;
        let computerSelection = computerPlay();
        playGame(humanSelection, computerSelection);
    });
});

// Get a random choice for the computer
function computerPlay() {
    const shapes = ['Rock', 'Paper', 'Scissors'];
    return shapes[Math.floor(Math.random() * shapes.length)];
}

// Play one round and return the winner of the round
function playRound(humanSelection, computerSelection) {
    roundsPlayed++;
    if (humanSelection === computerSelection) {
        return "Tie";
    }
    if (computerSelection === 'Rock') {
        if (humanSelection === 'Scissors') {
            return "Computer";
        }
        return "Human";
    }
    if (computerSelection === 'Scissors') {
        if (humanSelection === 'Paper') {
            return "Computer";
        }
        return "Human";
    }
    if (computerSelection === 'Paper') {
        if (humanSelection === 'Rock') {
            return "Computer";
        }
        return "Human";
    }    
}

// Calculate the player and computer scores
function calcScore(outcome) {
    if (outcome === 'Computer') {
        computerScore++;
    }
    if (outcome === 'Human') {
        humanScore++;
    }
}

// Get the winner at the end of 5 rounds
function getWinner() {
    if (computerScore > humanScore) {
        return 'Computer';
    } else if (computerScore < humanScore) {
        return 'Human';
    } else {
        return 'Tie';
    }
}

function playGame(humanSelection, computerSelection) {
    console.clear();    
    const outcome = playRound(humanSelection, computerSelection);
    console.log(`Rounds played: ${roundsPlayed}`);
    console.log(`Human plays: ${humanSelection}`);
    console.log(`Computer plays: ${computerSelection}`);
    if (outcome === 'Tie') {
        console.log("This round was a tie");
    } else {
        console.log(`${outcome} wins this round`);
    }

    calcScore(outcome);
    if (roundsPlayed === 5) {
        console.clear();
        console.log("Rounds played: 5");
        if (humanScore === 1) {
            console.log(`Human scored ${humanScore} point`);
        } else {
            console.log(`Human scored ${humanScore} points`);
        }
        if (computerScore === 1) {
            console.log(`Computer scored ${computerScore} point`);
        } else {
            console.log(`Computer scored ${computerScore} points`);
        }

        const winner = getWinner();
        if (winner === 'Tie') {
            console.log("It was a tie");
        } else {
            console.log(`The winner is: ${winner}`);
        }
        resetGame();
    }
}

function resetGame() {
    computerScore = 0;
    humanScore = 0;
    roundsPlayed = 0;
}