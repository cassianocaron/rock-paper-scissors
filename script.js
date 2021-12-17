let computerScore = 0;
let humanScore = 0;

// Get a random choice for the computer
function computerPlay() {
    const shapes = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = shapes[Math.floor(Math.random() * shapes.length)];
    return computerSelection;
}

// Get the player choice
function humanPlay() {
    while (true) {
        let input = prompt('What do you play?');
        const humanSelection = input[0].toUpperCase() + input.toLowerCase().slice(1);
        if (isValidInput(humanSelection)) {
            return humanSelection;
        }
        alert("Invalid input");
    }
}

// Validate the player input
function isValidInput(humanSelection) {
    if (humanSelection === 'Rock' || humanSelection === 'Paper' || humanSelection === 'Scissors') {
        return true;
    }
    return false;
}

// Play one round and return the winner of the round
function playRound(computerSelection, humanSelection) {
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

function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const humanSelection = humanPlay();
        const outcome = playRound(computerSelection, humanSelection);
        console.log(`Computer plays: ${computerSelection}`);
        console.log(`Human plays: ${humanSelection}`);
        if (outcome === 'Tie') {
            console.log("This round was a tie");
        } else {
            console.log(`${outcome} wins this round`);
        }        
        calcScore(outcome);
    }
    if (computerScore === 1) {
        console.log(`Computer scored ${computerScore} point`);
    } else {
        console.log(`Computer scored ${computerScore} points`);
    }
    if (humanScore === 1) {
        console.log(`Human scored ${humanScore} point`);
    } else {
        console.log(`Human scored ${humanScore} points`);
    }
    const winner = getWinner();
    if (winner === 'Tie') {
        console.log("It was a tie");
    } else {
        console.log(`The winner is: ${winner}`);
    }
}

playGame();