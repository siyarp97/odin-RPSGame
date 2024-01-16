let playerScore = 0
let computerScore = 0
let computerChoice = ''
let playerSelection = ''

// Generated Html Elements
const wrapper = document.querySelector('#wrapper')
const p = document.createElement('p')


// For Score Display
const pScoreDisplay = document.createElement('p')
const cScoreDisplay = document.createElement('p')

pScoreDisplay.innerHTML = `Player Score : ${playerScore}`
cScoreDisplay.innerHTML = `Computer Score : ${computerScore}`



// Selections
const rock = document.createElement('button')
rock.innerText = 'Rock'
const paper = document.createElement('button')
paper.innerText = 'Paper'
const scissors = document.createElement('button')
scissors.innerText = 'Scissors'


// Wrapper Appends
wrapper.appendChild(rock)
wrapper.appendChild(paper)
wrapper.appendChild(scissors)
wrapper.appendChild(p)
wrapper.appendChild(cScoreDisplay)
wrapper.appendChild(pScoreDisplay)


// Click Evnts
rock.addEventListener('click', () => {
    playerSelection = 'rock'
    playRound()
    endGame()

})
paper.addEventListener('click', () => {
    playerSelection = 'paper'
    playRound()
    endGame()

})
scissors.addEventListener('click', () => {
    playerSelection = 'scissors'
    playRound()
    endGame()

})





//* Functions

function computerChoiceFunction() {
    const choices = ['rock', 'paper', 'scissors']
    random = Math.round(Math.random() * (choices.length - 1))
    computerChoice = choices[random]

}


function playRound() {

    computerChoiceFunction()


    if (computerChoice == playerSelection) {

        p.innerText = "Equals"

    }
    else if (playerSelection == 'rock' && computerChoice == 'scissors' || playerSelection == 'paper' && computerChoice == 'rock' || playerSelection == 'scissors' && computerChoice == 'paper') {

       
        const PgramWord = playerSelection.replace(playerSelection[0],playerSelection[0].toUpperCase())
        const CgramWord = computerChoice.replace(computerChoice[0], computerChoice[0].toUpperCase())

        p.innerText = `${PgramWord} beats ${CgramWord} Player Wins!`

        playerScore++

        pScoreDisplay.innerHTML = `Player Score : ${playerScore}`
        // cScoreDisplay.innerHTML = `Computer Score : ${computerScore}`

    }

    else {
        const PgramWord = playerSelection.replace(playerSelection[0],playerSelection[0].toUpperCase())
        const CgramWord = computerChoice.replace(computerChoice[0], computerChoice[0].toUpperCase())

        p.innerText = `${CgramWord} beats ${PgramWord} Computer Wins!`

        computerScore++

        cScoreDisplay.innerHTML = `Computer Score : ${computerScore}`
    }

}

function endGame() {
    if (playerScore == 5) {
        pScoreDisplay.setAttribute('style', 'display:none;')
        cScoreDisplay.setAttribute('style', 'display:none;')
        rock.setAttribute('style', 'display:none;')
        paper.setAttribute('style', 'display:none;')
        scissors.setAttribute('style', 'display:none;')
        p.innerText = 'Game Over, Player Wins!'

        const tryAgainBtn = document.createElement('button')
        tryAgainBtn.innerHTML = 'Try Again?'
        wrapper.append(tryAgainBtn)
        tryAgainBtn.addEventListener('click', () => {
            restartGame()
            tryAgainBtn.setAttribute('style', 'display:none')
        })


    }
    else if (computerScore == 5) {
        pScoreDisplay.setAttribute('style', 'display:none;')
        cScoreDisplay.setAttribute('style', 'display:none;')
        rock.setAttribute('style', 'display:none;')
        paper.setAttribute('style', 'display:none;')
        scissors.setAttribute('style', 'display:none;')
        p.innerText = 'Game Over, Computer Wins!'

        const tryAgainBtn = document.createElement('button')
        tryAgainBtn.innerHTML = 'Try Again?'
        wrapper.append(tryAgainBtn)
        tryAgainBtn.addEventListener('click', () => {
            restartGame()
            tryAgainBtn.setAttribute('style', 'display:none')
        })
    }
}

function restartGame() {
    // playerScore = 0
    // pScoreDisplay.innerHTML = `Player Score : ${playerScore}`
    // computerScore = 0
    // cScoreDisplay.innerHTML = `Computer Score : ${computerScore}`
    // computerChoice = ''
    // playerSelection = ''
    // p.innerText = ''
    // pScoreDisplay.setAttribute('style', 'display:static;')
    // cScoreDisplay.setAttribute('style', 'display:static;')
    // rock.setAttribute('style', 'display:static;')
    // paper.setAttribute('style', 'display:static;')
    // scissors.setAttribute('style', 'display:static;')
   return window.location.reload()
}



