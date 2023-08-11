//Rock, Paper and Scissors Game played via prompts with all outputs directed to the console

//Function to take player input and ensure only first letter is capitalized

function caseCorrection(string){
    let temp = string[0].toUpperCase() + string.slice(1).toLowerCase();
    console.log (`Corrected string to: ${temp}`);
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
        playerSelection();
    }
}

