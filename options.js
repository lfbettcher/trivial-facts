const startGameBtn = document.getElementById("startGameBtn");

let difficulty = "";
let numberOfQuestions = 0;

setNumberOfQuestions = num => {
  numberOfQuestions = num;
  console.log(numberOfQuestions);
  checkIfOptionsSelected();
};

setDifficulty = level => {
  difficulty = level;
  console.log(difficulty);
  checkIfOptionsSelected();
};

checkIfOptionsSelected = () => {
  if (difficulty != "" && numberOfQuestions != 0) {
    createURL(numberOfQuestions, difficulty);
  }
};

createURL = (number, difficulty) => {
  URL = `https://opentdb.com/api.php?amount=${number}&difficulty=${difficulty}&type=multiple"`;
  localStorage.setItem("triviaURL", URL);
  startGameBtn.disabled = false;
};

goToGame = () => {
  window.location.assign("game.html");
};
