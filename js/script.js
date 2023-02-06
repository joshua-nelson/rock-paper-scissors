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

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Enter a choice: ");
        
        if (playRound(playerChoice, getcomputerChoice()).includes("You win")) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }

        console.log(`The score is: Player: ${playerScore} Computer: ${computerScore}`)
    }
}

game()