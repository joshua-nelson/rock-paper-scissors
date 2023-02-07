let playerScore = 0;
let computerScore = 0;
const text = document.querySelector('h2');
const score = document.querySelector('h1')
const newGame = document.querySelector('#new-game');







function getcomputerChoice() {
    const choices = ['rock', 'paper', 'scissors']

    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {

    

    playerSelection.toLowerCase();
    computerSelection.toLowerCase();


    if(playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats Scissors"
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats rock"
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats paper"
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win! Paper beats rock"
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats scissors"
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats paper"
    } else {
        return "The round is a tie!"
    }

}

const playerChoices = Array.from(document.querySelectorAll('input'));


    playerChoices.forEach(element => {
    element.addEventListener('click', function(e){
        let roundResult = playRound(e.target.id, getcomputerChoice());

        if(playerScore == 5) {
            text.textContent = 'Player Wins!';
            
        } else if (computerScore == 5){
            text.textContent = 'Computer Wins!';
        } else {
            game(roundResult);
        }
       
    });
});

function resetGame() {
    text.textContent = '';
    score.textContent = '';
    playerScore = 0;
    computerScore = 0;
    console.log("run");
}

function game(round){



    scoreUpdate: if (round.includes("You win")) {
        playerScore += 1;
    } else if(round.includes("tie")) {
        break scoreUpdate;
    } else {
        computerScore += 1;
    }
    

    

    text.textContent = round;
    score.textContent = `Score: Player ${playerScore} Computer ${computerScore}`;

}



newGame.addEventListener('click', function(){
    resetGame();
});