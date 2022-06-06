const computerPlay = () => {
    const choices = ["Rock", "Paper", "Scissors"]
    const choice = choices[Math.floor(Math.random()* choices.length)].toLowerCase()
    return choice
}



const singleRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats Rock."
        } else {
            return "You win! Rock beats Scissors."
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beats Paper."
        } else {
            return "You win! Paper beats Rock."
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors."
        } else {
            return "You win! Scissors beats Paper."
        }
    }
}

const game = () => {
    let playerPoints = 0
    let computerPoints = 0
    for(let partyNumber = 0; partyNumber < 5; partyNumber++) {
        const computerSelection = computerPlay()
        const playerSelection = prompt("Rock, Paper or Scissors ?").toLowerCase()
        const result = singleRound(playerSelection, computerSelection)
        if(result.includes("win")) {
            playerPoints++
            console.log(`You have ${playerPoints} points and the computer has ${computerPoints} points`)
        } else if(result.includes("lose")) {
            computerPoints++
            console.log(`You have ${playerPoints} points and the computer has ${computerPoints} points`)
        } else {
            console.log(`Tie, You have ${playerPoints} points and the computer has ${computerPoints} points`)
        }
    }
    if(playerPoints > computerPoints) {
        console.log("You win the game!") 
    } else if(playerPoints < computerPoints) {
        console.log("You lose the game!")
    } else {
        console.log("It's a tie!")
    }
}

game()