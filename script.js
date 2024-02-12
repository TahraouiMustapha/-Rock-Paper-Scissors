const rock = document.createElement('button');
rock.innerText = "Rock";

const paper = document.createElement('button');
paper.innerText = "paper";

const scissors = document.createElement('button');
scissors.innerText = "scissors";

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);

let resultDiv = document.createElement('div');
document.body.appendChild(resultDiv);
let repos = document.createTextNode("");

let playerScore = 0, computerScore = 0;
let reposScore = document.createTextNode(`your score :${playerScore} | computer score: ${computerScore}`);
resultDiv.appendChild(reposScore);

rock.onclick = () => {
    getResult(playRound("rock", getComputerChoice()));
    reposScore.nodeValue = `your score :${playerScore} | computer score: ${computerScore}`;
}
paper.onclick = () => {
    getResult(playRound("paper", getComputerChoice()));
    reposScore.nodeValue = `your score :${playerScore} | computer score: ${computerScore}`;
}
scissors.onclick = () => {
    getResult(playRound("scissors", getComputerChoice()));
    reposScore.nodeValue = `your score :${playerScore} | computer score: ${computerScore}`;
}



function getComputerChoice() {
    const computerChoices = ["rock","paper","scissors"];
    let index = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[index];
}


function playRound(playerSelection,computerSelection) {
    let res;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    switch(playerSelection) {
        case "rock":
            if(computerSelection == "scissors") {
                res="Win";
            } else if( computerSelection == "paper") {
                res="Lose";
            } else {
                res = "draw"
            }
       
        case "scissors":
            if(computerSelection == "paper") {
                res="Win";
            } else if( computerSelection == "rock") {
                res="Lose";
            } else {
                res = "draw"
            }
       
        case "paper":
            if(computerSelection == "rock") {
                res="Win";
            } else if( computerSelection == "scissors") {
                res="Lose";
            } else {
                res = "draw"
            }            
    }
    return res;
}

function getResult(result){

        if(result == "Win") {
            playerScore++;
            if (playerScore === 5) {
                repos.nodeValue = "You Are Winner this game";
                resultDiv.appendChild(repos);
            } else {
                repos.nodeValue = result + " the game" ;
                resultDiv.appendChild(repos);
            }
        } else if (result == "Lose") {
            computerScore++;
            if (computerScore === 5) {
                repos.nodeValue = "You Are Loser this game";
                resultDiv.appendChild(repos);
            } else {
                repos.nodeValue = result + " the game" ;
                resultDiv.appendChild(repos);
            }
        }  
}


