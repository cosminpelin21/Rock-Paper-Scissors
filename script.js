const playerDisplay = document.getElementById('player-choice');
const computerDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

const choices=["Rock", "Paper", "Scissors"];

function Game(playerChoice){
    const computerChoice=choices[Math.floor(Math.random() * 3)];

    const getResult = (playerChoice, computerChoice) => {
        if(playerChoice === computerChoice){
            return "It's a draw!";
        }
        else if((playerChoice === "Rock" && computerChoice === "Scissors") ||
                (playerChoice === "Paper" && computerChoice === "Rock") ||
                (playerChoice === "Scissors" && computerChoice === "Paper")){
            return "You win!";
        }
        else{
            return "You lose!";
        }
    }
    const result = getResult(playerChoice, computerChoice);
    resultDisplay.textContent = result;
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;

    resultDisplay.style.backgroundColor = result === "You win!" ? "green" : result === "You lose!" ? "red" : "gray";
    resultDisplay.style.color = "white";
    resultDisplay.style.border = "2px solid transparent";

}