const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// display game score on end screen
finalScore.innerText = mostRecentScore;

// enable save button if username has value
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

// save score
saveHighScore = e => {
  // prevent page refresh when save button is clicked
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value
  };
  highScores.push(score);

  // sort score array
  // if b is greater than a, put b before a
  highScores.sort((a, b) => b.score - a.score);

  // limit highScores to top 5 scores
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};
