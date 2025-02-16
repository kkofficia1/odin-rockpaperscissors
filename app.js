const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    return choices[Math.floor(Math.random()*choices.length)]
}

const getHumanChoice =() => {
    let humanInput = prompt("What do you choose? Rock, paper or scissors?\n");
    return humanInput
}

let humanChoice;
let computerChoice = getComputerChoice();


// console.log("Human choice: " + getHumanChoice());

// console.log("Computer choice: " + getComputerChoice());


let computerScore = 0;
let humanScore = 0;

let resultDiv = document.querySelector(".results");

const playRound = (humanChoice, computerChoice) => {
        resultDiv.innerHTML = "Human Choice: " + humanChoice + " Computer choice: " + computerChoice;
        if (humanChoice == "rock" && computerChoice =="paper"){
            resultDiv.innerHTML += "<br>You lose! Paper beats rock.<br>";
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice=="scissors"){
            resultDiv.innerHTML += "<br>You lose! Scissors beat paper!<br>";
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice =="rock"){
            resultDiv.innerHTML += "<br>You lose! Rock beats scissors!<br>";
            computerScore++;
        } else if (humanChoice=="rock" && computerChoice =="scissors"){
            resultDiv.innerHTML += "<br>You win! Rock beats scissors!<br>";
            humanScore++;
        } else if (humanChoice=="paper" && computerChoice=="rock"){
            resultDiv.innerHTML += "<br>You win! Paper beats rock!<br>";
            humanScore++;
        } else if (humanChoice=="scissors" && computerChoice=="paper"){
            resultDiv.innerHTML += "<br>You win! Scissors beat paper!<br>";
            humanScore++;
        } else {
            resultDiv.innerHTML += "<br>It's a draw!<br>";
        }
        resultDiv.innerHTML += "Player Score: " + humanScore + " Computer Score: " + computerScore;
};

let paperButton = document.querySelector("#paper-button");
paperButton.addEventListener("click", (e) => {
    computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

let rockButton = document.querySelector("#rock-button");
rockButton.addEventListener("click", (e) => {
    computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
})

let scissorsButton = document.querySelector("#scissors-button");
scissorsButton.addEventListener("click", (e) => {
    computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
})