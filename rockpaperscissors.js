//Rock, Paper and Scissors Game played via prompts with all outputs directed to the console

//Function to take player input and ensure only first letter is capitalized

function caseCorrection(string){
    let temp = string[0].toUpperCase() + string.slice(1).toLowerCase();
    return temp;
}

//Player input function

function playerSelection() {
    let selection = caseCorrection(prompt("What do you choose?: \n'Rock' \n'Paper' \n'Scissors'"));

    if (selection == "Rock" || selection == "Paper" || selection == "Scissors"){

    console.log (`Player chose: ${selection}`);
    return selection;
    }
    else{
        alert("You must choose 'Rock', 'Paper' or 'Scissors'.  Try again.");
        return playerSelection();
    }

}

//Computer selection function

function computerSelection(){
    let selection = Math.floor(Math.random()*(4-1)+1);
    switch (selection) {
    case 1:
        console.log ("Computer chose: Rock");
        return "Rock";
        break;
    case 2:
        console.log ("Computer chose: Paper");
        return "Paper";
        break;
    case 3:
        console.log ("Computer chose: Scissors");
        return "Scissors";
        break;
    }
        
}

//Rock Paper Scissors Game function

function rpsGame(playerSelection, computerSelection, playerScore, computerScore){

    if (playerSelection == "Rock" && computerSelection == "Scissors"){
        alert("You Won! Rock beats Scissors!");
        console.log ("You won this round!");
        return ++playerScore;
    }

    else if (playerSelection == "Paper" && computerSelection == "Rock"){

        alert("You Won! Paper beats Rock!");
        console.log ("You won this round!");
        return ++playerScore;
    }

    else if (playerSelection == "Scissors" && computerSelection == "Paper"){

        alert("You Won! Scissors beats Paper!");
        console.log ("You won this round!");
        return ++playerScore;
    }

    else if (playerSelection == computerSelection){
        alert(`You both chose ${playerSelection}! No points awarded this round.`);
        console.log (`Draw. Both players chose ${playerSelection}.`);
        return null;
    }
    else{
        alert(`You Lost!  The computer beat your ${playerSelection} with ${computerSelection}!`);
        return ++computerScore;
    }
}

//Introduce multiple rounds with a first to 3 points wins scoring system

function rockPaperScissors(){

    let playerScore = 0;
    let computerScore = 0;
    let round = 1;

    while (playerScore < 3 || computerScore < 3){

        alert (`Round ${round}!`);
        console.log (`Round ${round}!`);

        rpsGame(playerSelection(), computerSelection())
        
        alert (`The current score is: \nPlayer: ${playerScore} \nComputer: ${computerScore}`);
        console.log (`The current score is: \nPlayer: ${playerScore} \nComputer: ${computerScore}`);

        ++round;
    }

    if (playerScore == 3){
        alert (`Congratulations! You beat the computer ${playerScore} to ${computerScore}!`);
        console.log (`You won ${playerScore} - ${computerScore}`);
    }
    else{
        alert(`Loser! The computer beat you ${computerScore} to ${playerScore}!`);
        console.log (`You lost ${computerScore} - ${playerScore}`);
    }

}

rockPaperScissors();