let numberToGuess = Math.round(Math.random() * 100);
let tries = 0;

function guessTheNumber(){
    tries++;
    triesDisplay.innerHTML = "Versuche: " + tries;
    if(numberToGuess == guessInput.value){
        headline.innerHTML = "Du hast gewonnen!!! Yay!";
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        rateTheGame.innerHTML = "Bewerte das Spiel!";
        rateTheGame.style.display = "block";
        const restartButton = document.createElement('button');
        restartButton.id = 'restartButton';
        restartButton.innerText = 'Neustarten';
        restartButton.onclick = function() {
        location.reload();
        };
        document.body.appendChild(restartButton);
    }
    if(numberToGuess > guessInput.value){
        headline.innerHTML = "Die gesuchte Zahl ist größer!";
    }
    if(numberToGuess < guessInput.value){
        headline.innerHTML = "Die gesuchte Zahl ist kleiner!";
    }
    if(guessInput.value > 100){
        headline.innerHTML = "Bro, das stand doch grad, dass sie Zahl zwischen 0 und 100 liegen muss!!!😤";
    }
    guessInput.value = "";
    if(tries >= 10){
        headline.innerHTML = "Game Over! Die gesuchte Zahl war: " + numberToGuess;
        guessInput.disabled = true;
        guessButton.disabled = true;
        const reloadButton = document.createElement('button');
        reloadButton.id = 'reloadButton';
        reloadButton.innerText = 'Neustarten';
        reloadButton.onclick = function() {
        location.reload();
        };
        document.body.appendChild(reloadButton);
    }
}