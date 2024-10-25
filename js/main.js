
// Define DOM Elements
const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

// Create scoreboard Object to Keep Score
const scoreboard = {
    player: 0,
    computer: 0
}


// Loop through Choices
// Add Event Listeners for each choice
choices.forEach(choice => choice.addEventListener('click', play));

function play(e){

   // Display Restart Game button
   restart.style.display = 'inline-block';

   // Get user's choice
   const playerChoice = e.target.id;

   // Get computer's choice
   const computerChoice = getComputerChoice();

   // Get Winner
   const winner = getWinner(playerChoice, computerChoice);

   // Log choices & winner
   console.log(playerChoice, computerChoice, winner);


}

// Generate computer's choice
function getComputerChoice(){

    // Generate Random Decimal Number
    const rand = Math.random();

    // Return rock, paper, scissors based on rand value
    if(rand < 0.34){

        return 'rock';

    } else if (rand <= 0.67) {

        return 'paper';

    } else {

        return 'scissors';
    }

}

// Decide Winner
// p - playerChoice & c - computerChoice
function getWinner(p, c){

    if(p === c){

        // When both have the same choice
        return 'draw'

    } else if(p === 'rock'){

        if(c === 'paper'){

            // Computer Wins
            return 'computer'

        } else {

            // Player Wins
            return 'player'

        }

    } else if(p === 'paper'){

        if(c === 'scissors'){

            return 'computer';

        } else {

            return 'player';

        }

    } else if(p === 'scissors'){

        if(c === 'rock'){

            return 'computer';

        } else {

            return 'player';

        }

    } 

}





