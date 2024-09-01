let randomNumber;
let attempts;

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('attemptCount').textContent = attempts;
    document.getElementById('guessInput').value = '';
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById('feedback').textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;
    document.getElementById('attemptCount').textContent = attempts;

    if (userGuess === randomNumber) {
        document.getElementById('feedback').textContent = `Congratulations! You guessed it right in ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
        document.getElementById('feedback').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('feedback').textContent = 'Too high! Try again.';
    }
}

document.getElementById('submitGuess').addEventListener('click', checkGuess);
document.getElementById('restartGame').addEventListener('click', initializeGame);

initializeGame();
