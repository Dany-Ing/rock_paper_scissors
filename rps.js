//Set Scores
let playerScore = 0;
let computerScore = 0;

const player_score = document.getElementById("player-score");
const computer_score = document.getElementById("computer-score");

const score_div = document.querySelector(".score");
const results_div = document.querySelector(".results > p");
const finalResults_div = document.querySelector(".final-results > h1");

const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
//Computer's Choice 
function computerPlay(){
    var myArray = ['Rock' , 'Paper' , 'Scissors'];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    return rand;
}

//Player's choice
function main(){
    rock_div.addEventListener('click', function(){
        const computerSelection = computerPlay()
        playRound('Rock', computerSelection)
    })

    paper_div.addEventListener('click', function(){
        const computerSelection = computerPlay()
        playRound('Paper', computerSelection)
    })

    scissors_div.addEventListener('click', function(){
        const computerSelection = computerPlay()
        playRound('Scissors', computerSelection)
    })
}

function lose(player, computer){
    computerScore++;
    computer_score.innerHTML = computerScore;
    player_score.innerHTML = playerScore;
    results_div.innerHTML = `You Lost This Round! ${computer} beats ${player}`;
}

function win(player, computer){    
    playerScore++;
    player_score.innerHTML = playerScore;
    computer_score.innerHTML = computerScore;
    results_div.innerHTML = `You Won This Round! ${player} beats ${computer}`; 
}
    
function draw(){
    results_div.innerHTML = "It's a draw.";
}

function results(){
    if(playerScore>computerScore){
        finalResults_div.innerHTML = "Player Wins Game!"
    } else {
        finalResults_div.innerHTML = "Computer Wins Game."
    }
}

//Plays one round
function playRound(playerSelection, computerSelection){
    if((playerScore < 5) && (computerScore < 5)){
        if (playerSelection == 'Rock' && computerSelection == 'Paper'){
            lose(playerSelection, computerSelection);
        }
        else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
            win(playerSelection, computerSelection);
        }
        else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
            lose(playerSelection, computerSelection);
        }
        else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
            win(playerSelection, computerSelection);
        }
        else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
            win(playerSelection, computerSelection);
        }
        else if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
            lose(playerSelection, computerSelection);
        }
        else{
            draw();
        }
    } else {
        results();
    }  
}

main();