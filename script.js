const computerPlay = () => {
    const choices = ["Rock", "Paper", "Scissors"]
    const choice = choices[Math.floor(Math.random()* choices.length)].toLowerCase()
    return choice
}

const scorePlayer = document.querySelector("#scorePlayer")
const scoreComputer = document.querySelector("#scoreComputer")
const result = document.querySelector("#result")
const round = document.querySelector("#round")
let playerPoints = 0
let computerPoints = 0




const playerChoice = () => {
    const buttons = document.querySelectorAll("button")

    buttons.forEach(button => {
        button.addEventListener("click", e => {
            const playerSelection = e.target.value
            console.log(playerSelection)
            const computerSelection = computerPlay()
            console.log(computerSelection);

            if (playerSelection === "rock") {
                if (computerSelection === "paper") {
                    result.textContent="You lose! Paper beats Rock."
                } else {
                    result.textContent="You win! Rock beats Scissors."
                }
            }
            if (playerSelection === "paper") {
                if (computerSelection === "scissors") {
                    result.textContent="You lose! Scissors beats Paper."
                } else {
                    result.textContent="You win! Paper beats Rock."
                }
            }
            if (playerSelection === "scissors") {
                if (computerSelection === "rock") {
                    result.textContent="You lose! Rock beats Scissors."
                } else {
                    result.textContent="You win! Scissors beats Paper."
                }
            }

            if (playerSelection === computerSelection) {
                result.textContent="It's a tie!"
            }

                if(result.textContent.includes("win")) {
                    playerPoints++
                    console.log(`You have ${playerPoints} points and the computer has ${computerPoints} points`)
                } else if(result.textContent.includes("lose")) {
                    computerPoints++
                    console.log(`You have ${playerPoints} points and the computer has ${computerPoints} points`)
                } else {
                    console.log(`Tie, You have ${playerPoints} points and the computer has ${computerPoints} points`)
                }

                scorePlayer.textContent = playerPoints
                scoreComputer.textContent = computerPoints

                if(playerPoints === 5) {
                    result.textContent = "You win the game"
                    playerPoints = 0
                    computerPoints = 0
                } else if(computerPoints === 5) {
                    result.textContent = "You lost the game"
                    playerPoints = 0
                    computerPoints = 0
                }
        })
    })
}

playerChoice()


// const game = () => {


//     if(playerPoints > computerPoints) {
//         console.log("You win the game!") 
//     } else if(playerPoints < computerPoints) {
//         console.log("You lose the game!")
//     } else {
//         console.log("It's a tie!")
//     }
// }