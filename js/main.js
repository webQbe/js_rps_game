
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

    // Log ID of clicked element
    console.log(e.target.id);

}





