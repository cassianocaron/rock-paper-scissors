let computerScore = 0;
let humanScore = 0;

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let humanSelection = button.id;
        let computerSelection = computerPlay();
        if (computerScore < 5 && humanScore < 5) {
            playGame(humanSelection, computerSelection);
        } else {
            resetGame();
            playGame(humanSelection, computerSelection);
        }
    });
});

// Get a random choice for the computer
function computerPlay() {
    const shapes = ['Rock', 'Paper', 'Scissors'];
    return shapes[Math.floor(Math.random() * shapes.length)];
}

// Play one round and return the winner of the round
function playRound(humanSelection, computerSelection) {
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
    const outcome = playRound(humanSelection, computerSelection);
    calcScore(outcome);

    const roundOutcome = document.querySelector('#round-result');
    if (outcome === 'Tie') {
        roundOutcome.textContent = `You play ${humanSelection} - Computer plays ${computerSelection} -> ${outcome}!`;
    } else {
        roundOutcome.textContent = `You play ${humanSelection} - Computer plays ${computerSelection} -> ${outcome} wins this round!`;
    }

    const scores = document.querySelector('#scoreboard');
    scores.textContent = `Player ${humanScore} X ${computerScore} Computer`    
    
    if (computerScore === 5 || humanScore === 5) {
        const winner = getWinner();
        const result = document.querySelector('#result');
        result.textContent = `${winner} wins!`;
        const btn = document.createElement('button');
        btn.setAttribute('id', 'play-again');
        btn.innerHTML = 'Play Again';        
        btn.onclick = () => {
            resetGame();
        }
        document.body.appendChild(btn);
        const playAgainBtn = document.querySelector('#play-again');
        playAgainBtn.style.position = 'absolute';
        playAgainBtn.style.left = '50%';
        playAgainBtn.style.transform = 'translateX(-50%)';
        playAgainBtn.style.padding = '10px 15px';
        playAgainBtn.style.borderColor = 'black';
        playAgainBtn.style.borderRadius = '5px';
        playAgainBtn.style.backgroundColor = '#74F69C';
        playAgainBtn.style.fontSize = '15px';
        playAgainBtn.style.fontWeight = '600';
    }
}

function resetGame() {
    computerScore = 0;
    humanScore = 0;
    document.querySelector('#round-result').textContent = '';
    document.querySelector('#scoreboard').textContent = '';
    document.querySelector('#result').textContent = '';
    document.getElementById('play-again').remove();
}