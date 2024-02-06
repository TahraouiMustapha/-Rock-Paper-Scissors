
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

function winner(selection1,selection2) {
    switch(selection1) {
        case "rock":
            if(selection2 == "scissors") {
                return "Win";
            } else if( selection2 == "paper") {
                return "Lose";
            } else {
                return "nill";
            }
       
        case "scissors":
            if(selection2 == "paper") {
                return "Win";
            } else if( selection2 == "rock") {
                return "Lose";
            } else {
                return "nill";
            }
       
        case "paper":
            if(selection2 == "rock") {
                return "Win";
            } else if( selection2 == "scissors") {
                return "Lose";
            } else {
                return "nill";
            }
    }
}

function playRound(playerSelection,computerSelection) {
    if(winner(playerSelection,computerSelection) == "Win") {
        return `\"You Win! ${playerSelection} beats ${computerSelection}\"`;
    } else if(winner(playerSelection,computerSelection) == "Lose"){
        return `\"You Lose! ${computerSelection} beats ${playerSelection}\"`;
    } else {
        return "draw!";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection.toLowerCase(),computerSelection.toLowerCase()));