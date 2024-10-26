
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

/* EVENT LISTENERS */

// Add Event Listeners for each choice
// Loop through Choices
choices.forEach(choice => choice.addEventListener('click', play));

// Listen for clicks on browser window
window.addEventListener('click', closeModal);

// Close Modal
function closeModal(e){

    // Check where user clicked
    if(e.target == modal){

        // If area between div.modal and div#result is clicked
        modal.style.display = 'none';

    }

}





function play(e){

   // Display Restart Game button
   restart.style.display = 'inline-block';

   // Get user's choice
   const playerChoice = e.target.id;

   // Get computer's choice
   const computerChoice = getComputerChoice();

   // Get Winner
   const winner = getWinner(playerChoice, computerChoice);

   // Display winner
   showWinner(winner, computerChoice);
   


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

// Display Winner
function showWinner(winner, computerChoice){

    if(winner === 'player'){

        // Increment Player Score
        scoreboard.player++

        // Output result to modal with choice icon
        result.innerHTML = `
            <h1 class="text-win">You Win!</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;

    } else if(winner === 'computer'){

        // Increment Computer Score
        scoreboard.computer++

        result.innerHTML = `
            <h1 class="text-lose">You Lose!</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;

    } else {

         result.innerHTML = `
         <h1>It's A Draw!</h1>
         <i class="fas fa-hand-${computerChoice} fa-10x"></i>
         <p>Computer chose <strong>${computerChoice}</strong></p>
     `;

    }

    // Display Score
    score.innerHTML = `
            <p>Player: ${scoreboard.player}</p>
            <p>Computer: ${scoreboard.computer}</p>
            `;


    // Unhide Modal
    modal.style.display = 'block';

}





