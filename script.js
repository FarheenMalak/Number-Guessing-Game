let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessButton = document.getElementById("guessButton");
const guessInput = document.getElementById("guessInput");
const result = document.getElementById("result");
const restartButton = document.getElementById("restartButton");

guessButton.addEventListener("click", () => {
    const userGuess = Number(guessInput.value);
    
    if (userGuess === randomNumber) {
        result.textContent = `🎉 Congratulations! You guessed it. 🎉`;
        guessButton.disabled = true;
        restartButton.classList.remove("hidden");
    } else if (userGuess < randomNumber) {
        result.textContent = "🔽 Too low! Try again.";
    } else if (userGuess > randomNumber) {
        result.textContent = "🔼 Too high! Try again.";
    }

    guessInput.value = "";
    guessInput.focus();
});

restartButton.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    result.textContent = "";
    guessButton.disabled = false;
    restartButton.classList.add("hidden");
    guessInput.value = "";
    guessInput.focus();
});
