const shapes = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {    
    return shapes[Math.floor(Math.random() * shapes.length)];
}

console.log(computerPlay());