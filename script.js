
function getComputerChoice() {
    let rand = Math.floor(Math.random() * 100)  ;
    if(rand <= 30) {
        return "rock";
    } else if(rand > 30 && rand <= 60) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(playerSelection,computerSelection) {
    let res;
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
    if(res == "Win") {
        return `\"You ${res}! ${playerSelection} beats ${computerSelection}\"`;
    } else if(res == "Lose") {
        return `\"You ${res}! ${computerSelection} beats ${playerSelection}\"`;
    } else {
        return `\"${res}!\"`;
    }   
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection.toLowerCase(),computerSelection.toLowerCase()));