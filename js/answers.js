const playCounter = document.querySelector(".play-page__counter span");
let playCounterValue = parseInt(playCounter.textContent);
function rightAnswer() {
   playCounterValue++;
   playCounter.textContent = playCounterValue;
   playCounter.classList.add("active");
   setTimeout(() => playCounter.classList.remove("active"), 700);
}

const playCrossesContainer = document.querySelector(".play-page__crosses");
const playCrosses = playCrossesContainer.querySelectorAll("div");
let mistakes = 0;
function wrongAnswer() {
   if (mistakes < playCrosses.length) {
      playCrosses[mistakes].classList.add("active");
      mistakes++;
   }
   if (mistakes >= 3) {
      console.log("Игра завершена!");
   }
}
