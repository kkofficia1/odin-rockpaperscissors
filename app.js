const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    return choices[Math.floor(Math.random()*choices.length)]
}

const getHumanChoice =() => {
    let humanInput = prompt("What do you choose? Rock, paper or scissors?\n");
    return humanInput
}



// console.log("Human choice: " + getHumanChoice());

// console.log("Computer choice: " + getComputerChoice());


const playGame = () => {
    let humanChoice;
    let computerChoice;

    let computerScore = 0;
    let humanScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        console.log("Human Choice: " + humanChoice + " Computer choice: " + computerChoice);
        if (humanChoice == "rock" && computerChoice =="paper"){
            console.log("You lose! Paper beats rock.\n");
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice=="scissors"){
            console.log("You lose! Scissors beat paper!\n");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice =="rock"){
            console.log("You lose! Rock beats scissors!\n");
            computerScore++;
        } else if (humanChoice=="rock" && computerChoice =="scissors"){
            console.log("You win! Rock beats scissors!\n");
            humanScore++;
        } else if (humanChoice=="paper" && computerChoice=="rock"){
            console.log("You win! Paper beats rock!\n");
            humanScore++;
        } else if (humanChoice=="scissors" && computerChoice=="paper"){
            console.log("You win! Scissors beat paper!\n");
            humanScore++;
        } else {
            console.log("It's a draw!\n");
        }
        console.log("Player Score: " + humanScore + " Computer Score: " + computerScore);
    }
    for (let i = 0; i < 5; i ++) {
        humanChoice=getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

playGame();