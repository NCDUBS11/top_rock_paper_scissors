let playerScore = 0;
let computerScore = 0;

const playBtn = document.querySelector(".play");
const playAgainBtn = document.querySelector(".playAgain");

const playerScore_span = document.querySelector(".playerScore");
const computerScore_span = document.querySelector(".computerScore");

playerScore_span.innerText = playerScore;
computerScore_span.innerText = computerScore;

const playerImage = document.querySelector(".playerImage");
const computerImage = document.querySelector(".computerImage");

const playerName = document.querySelector(".playerName");
const computerName = document.querySelector(".computerName");

const rock =document.querySelector(".rock");
const paper =document.querySelector(".paper");
const scissors =document.querySelector(".scissors");

main();

function main() {

    playBtn.addEventListener("click", () => {
        document.querySelector(".startBoard").style.display = "none";
        document.querySelector("footer").style.visibility = "visible";
    })

    rock.addEventListener("click", () => {
        round("rock");
    })

    paper.addEventListener("click", () => {
        round("paper");
    })

    scissors.addEventListener("click", () => {
        round("scissors");
    })



}


function round(playerChoice){
    const computerChoice = getComputerChoice();

    switch (playerChoice + computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerChoice, computerChoice);
            scoreCheck();
            break;

        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(playerChoice, computerChoice);
            scoreCheck();
            break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerChoice, computerChoice);
            scoreCheck();
            break;
    }
}


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let selection = Math.floor(Math.random()*3);
    return choices[selection];
    }


function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerText = playerScore;
    computerScore_span.innerText = computerScore;
    playerImage.src = `/images/${playerChoice}.png`;
    playerImage.style.visibility = "visible";
    computerImage.src = `/images/${computerChoice}.png`;
    computerImage.style.visibility = "visible";
    playerName.classList.add("winAnimation");
    setTimeout(()=>{playerName.classList.remove("winAnimation")},500);
    computerName.classList.add("loseAnimation");
    setTimeout(()=>{computerName.classList.remove("loseAnimation")},500);
}


function lose(playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerText = playerScore;
    computerScore_span.innerText = computerScore;
    playerImage.src = `/images/${playerChoice}.png`;
    playerImage.style.visibility = "visible";
    computerImage.src = `/images/${computerChoice}.png`;
    computerImage.style.visibility = "visible";
    computerName.classList.add("winAnimation");
    setTimeout(()=>{computerName.classList.remove("winAnimation")},500);
    playerName.classList.add("loseAnimation");
    setTimeout(()=>{playerName.classList.remove("loseAnimation")},500);
}


function draw(playerChoice, computerChoice) {
    playerImage.src = `/images/${playerChoice}.png`;
    playerImage.style.visibility = "visible";
    computerImage.src = `/images/${computerChoice}.png`;
    computerImage.style.visibility = "visible";
    computerName.classList.add("drawAnimation");
    setTimeout(()=>{computerName.classList.remove("drawAnimation")},500);
    playerName.classList.add("drawAnimation");
    setTimeout(()=>{playerName.classList.remove("drawAnimation")},500);
}


function scoreCheck(){
    if (playerScore == 10){
        document.querySelector("footer").style.visibility = "hidden";
        document.querySelector(".end").innerText = "Congrats! You win!!!"
        document.querySelector(".endBoard").style.display = "block";
        playAgainBtn.addEventListener("click", () => {
            document.querySelector("footer").style.visibility = "visible";
            document.querySelector(".endBoard").style.display = "none";
            playerScore = 0;
            computerScore = 0;
            window.location.reload();
            return false;
        })
    }
    
    else if (computerScore == 10){
        document.querySelector("footer").style.visibility = "hidden";
        document.querySelector(".end").innerText = "Ouch. You Lost..."
        document.querySelector(".endBoard").style.display = "block";
        playAgainBtn.addEventListener("click", () => {
            document.querySelector("footer").style.visibility = "visible";
            document.querySelector(".endBoard").style.display = "none";
            playerScore = 0;
            computerScore = 0;
            window.location.reload();
            return false;
        })
    }
}





