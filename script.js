
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

function playGame(){
    let userScore = 0 , computerScore = 0;

    for(let i=0 ; i<5 ; i++) {
        let userChoice = prompt("enter your choice: Rock | Paper | Scissors");
        let computerChoice = getComputerChoice();

        if(playRound(userChoice,computerChoice) == "Win") {
            userScore++;
            console.log(`You Win this round:\nyour score: ${userScore} \tcomputer Score:${computerScore}`);
        } else if (playRound(userChoice,computerChoice) == "Lose") {
            computerScore++;
            console.log(`You Lose this round:\nyour score: ${userScore} \t computer Score:${computerScore}`);
        } else {
            console.log("Draw! in this Round");
        } 
    }

    console.log("-----------------------------");
    if (userScore > computerScore) {
        console.log(`You Win The Game : \nyour score: ${userScore}`);
    } else if (userScore < computerScore) {
        console.log(`You Lose The Game : \ncomputer score: ${computerScore}`);
    } else {
        console.log(` Draw! \n your score: ${userScore} computer score:${computerScore}`);
    }
}

playGame();
