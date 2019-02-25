// display what key a user presses

// user guess is compared to possible correct letters


// if guess is not included in correctAnswer array
// guessesRemaining drops by 1

// if user guess is included in correctAnswer array
// replace blank letter slot with correctly guessed answer


// guess amount must decrease by one for every incorrect keypress
document.onkeydown = function (event) {
    var userGuess = event.key;
    userChoice.textContent = userGuess}

 