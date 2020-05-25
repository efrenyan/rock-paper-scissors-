// Computer choice 
function computerPlay() {
    let computerSelection = Math.random();
    if (computerSelection < 0.34) {
        computerSelection = "rock";
    } else if (computerSelection <= 0.67) {
        computerSelection = "paper";
    } else { 
        computerSelection = "scissors";
    }
    return computerSelection;
}

// One round game between player and computer 
function playRound(playerSelection, computerSelection) {
    let winner = ""
    if (playerSelection === computerSelection) {
        console.log("The result is a tie!");
        winner = "tie";
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        winner = "computer";
    } else {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        winner = "player";
    }
    return winner;
}


function game() {
    let playerScore = 0; 
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Please choose Rock, Paper, or Scissors: ").toLowerCase();
        let computerSelection = computerPlay();
        console.log("Game Number" + (i+1));
        console.log("You chose " + playerSelection); 
        console.log("Computer chose " + computerSelection);
        let winner = playRound(playerSelection, computerSelection);

        if (winner === "player") {
            playerScore++;
        } else if (winner === "computer") {
            computerScore++;
        } 
    }
    
    // final score and winner after 5 rounds
        if (playerScore > computerScore){
            console.log("Player wins!" + playerScore + " to " + computerScore);
        } else if (playerScore < computerScore) {
            console.log("Computer wins!" + computerScore + " to " + playerScore);
        } else if (playerScore === computerScore) {
            console.log("You tied with the computer!");
        }
        console.log("Game Over: Refresh to play again!");
    }



