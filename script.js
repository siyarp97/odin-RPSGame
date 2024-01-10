let playerScore = 0
let computerScore = 0
let keepMovin = true

function getComputerChoice(){
    choices = ['Rock', 'Paper', 'Scissors']
    let choicePoint = Math.round(Math.random() * ((choices.length)-1))
    let computerChoice = choices[choicePoint]
    console.log(computerChoice)
    return computerChoice
}

function playRound(playerSelection,computerSelection=getComputerChoice()){

    playerSelection = prompt('Rock? Paper? Scissors?')
    
    let playerLow = playerSelection.toLowerCase()
    let gramWord = playerLow.replace(playerLow[0], playerLow[0].toUpperCase())

    let computerLow = computerSelection.toLowerCase()
    

            if( ((playerLow == 'rock') && (computerLow == 'scissors')) ||
            ((playerLow == 'paper') && (computerLow == 'rock')) ||
            (playerLow == 'scissors') && (computerLow == 'paper'))
            {
                playerScore++
                console.log('Player Score: '+playerScore, 'Computer Score: '+computerScore)
                return console.log(`You win! ${gramWord} beats ${computerSelection}`)
            }

            else if( ((playerLow == 'rock') && (computerLow == 'paper')) ||
            ((playerLow == 'paper') && (computerLow == 'scissors')) ||
            (playerLow == 'scissors') && (computerLow == 'rock'))
            {
                computerScore++
                console.log('Player Score: '+playerScore, 'Computer Score: '+computerScore)
                return console.log(`You Lose! ${computerLow} beats ${gramWord}`)
            }

            else
            {
                return console.log(`A tie! ${computerLow} and ${gramWord}`)
            }

}

function game(){
    while (keepMovin) {
        playRound()
        if(playerScore == 5 ){
            console.log('Winner Player')
            keepMovin = false
        }
        else if(computerScore == 5 ){
            console.log('Winner Computer')
            keepMovin = false
        }
        else{
            keepMovin=true
        }
    }   
}

game()
