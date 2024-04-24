let wins = 0;
let losses = 0;
const images = ["field.jpg", "city.jpg", "mountain.jpg", "sky.jpg", "space.jpg"];
let backgroundImageIndex = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a TIE!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You WIN!';
        wins += 1;
        document.getElementById('wins').innerText = wins.toString();
    } else {
        result = 'You LOSE!';
        losses += 1;
        document.getElementById('losses').innerText = losses.toString();
    }

    document.getElementById('result').innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}

function resetScores() {
    wins = 0;
    losses = 0;
    document.getElementById('wins').innerText = wins.toString();
    document.getElementById('losses').innerText = losses.toString();
    document.getElementById('result').innerText = "Start the game by making a choice";
}

function changeBackground() {
    backgroundImageIndex = (backgroundImageIndex + 1) % 5;
    let img = new Image();
    img.src = images[backgroundImageIndex];
    img.onload = function () {
        document.body.style.transition = "background 1s linear";
        document.body.style.backgroundImage = "url('" + img.src + "')";
    }
}