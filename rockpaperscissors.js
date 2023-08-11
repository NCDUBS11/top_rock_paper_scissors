//Rock, Paper and Scissors Game played via prompts with all outputs directed to the console

//Function to take player input and ensure only first letter is capitalized

function caseCorrection(string){
    let temp = string[0].toUpperCase() + string.slice(1).toLowerCase();
    console.log (temp);
    return temp;
}

