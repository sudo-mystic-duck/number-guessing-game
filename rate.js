function rating(){
    console.log("Klappt");
    let jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
    backToGame.innerHTML = "Zurück zum Spiel!";
    backToGame.style.display = "block";
    thanksMessage.style.display = "block";
}