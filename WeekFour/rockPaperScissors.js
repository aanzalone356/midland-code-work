// Select all three buttons using any sort of selection method you prefer.
// Attach event listeners to each of them and make sure those are working. This can be done with a simple function that just does a console log on click.

let playerOption = 0;
let machineOption = 0;
let ties = 0;
let wins = 0;
let losses = 0;
let games = 0;

function playerChoice(choice){
    if(choice == rock){
        playerOption = 1;
        document.getElementById("user").innerHTML = "You choose rock";
        machineChoice(playerOption);
    }
    else if(choice == paper){
        playerOption = 2;
        document.getElementById("user").innerHTML = "You choose paper";
        machineChoice(playerOption);
    }
    else if(choice == scissors){
        playerOption = 3;
        document.getElementById("user").innerHTML = "You choose scissors";
        machineChoice(playerOption);
    }
}

function machineChoice(playerOption){
    machineOption = Math.floor(Math.random() * 3);
    while(machineOption < 1){
        machineOption = Math.floor(Math.random() * 3);
    }

    if(machineOption == 1){
        document.getElementById("computer").innerHTML = "The Computer picked rock";
    }
    else if(machineOption == 2){
        document.getElementById("computer").innerHTML = "The Computer picked paper";
    }
    else if(machineOption == 3){
        document.getElementById("computer").innerHTML = "The Computer picked scissors";
    }

    mainGame(playerOption, machineOption);
}

function mainGame(playerOption, machineOption){
    if(playerOption == machineOption){
        //Update Score
        ties++;
        document.getElementById("tie").innerHTML = ties;
        //add final message
        document.getElementById("final").innerHTML = "Don't worry The Computer is already ready for another round!";
        games++;
        document.getElementById("game").innerHTML = games;
    }
    else if(playerOption == 1 && machineOption == 3){
        //player wins
        wins++;
        document.getElementById("win").innerHTML = wins;

        document.getElementById("final").innerHTML = "Don't worry The Computer is already ready for another round!";
        games++;
        document.getElementById("game").innerHTML = games;
    }
    else if(playerOption == 3 && machineOption == 1){
        //player loses
        losses++;
        document.getElementById("loss").innerHTML = losses;

        document.getElementById("final").innerHTML = "Don't worry The Computer is already ready for another round!";
        games++;
        document.getElementById("game").innerHTML = games;
    }
    else if(playerOption == 2 && machineOption == 1){
        //player wins
        wins++;
        document.getElementById("win").innerHTML = wins;

        document.getElementById("final").innerHTML = "Don't worry The Computer is already ready for another round!";
        games++;
        document.getElementById("game").innerHTML = games;
    }
    else if(playerOption == 1 && machineOption == 2){
        //player loses
        losses++;
        document.getElementById("loss").innerHTML = losses;

        document.getElementById("final").innerHTML = "Don't worry The Computer is already ready for another round!";
        games++;
        document.getElementById("game").innerHTML = games;
    }
    else if(playerOption == 2 && machineOption == 3){
        //player loses
        losses++;
        document.getElementById("loss").innerHTML = losses;

        document.getElementById("final").innerHTML = "Don't worry The Computer is already ready for another round!";
        games++;
        document.getElementById("game").innerHTML = games;
    }
    else if(playerOption == 3 && machineOption == 2){
        //player wins
        wins++;
        document.getElementById("win").innerHTML = wins;

        document.getElementById("final").innerHTML = "Don't worry The Computer is already ready for another round!";
        games++;
        document.getElementById("game").innerHTML = games;
    }
}

document.getElementById("rock").addEventListener('click', () => {
    playerChoice(rock);
});

document.getElementById("paper").addEventListener('click', () => {
    playerChoice(paper);
});

document.getElementById("scissors").addEventListener('click', () => {
    playerChoice(scissors);
});
// Based off the button clicked, put a message in the page as to which button you clicked. This can be a div somewhere saying: "You chose rock!" or whatever other thing you prefer.
// Take the value returned from the AI rock paper scissors function and log that onto the screen as well.
