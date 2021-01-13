let secretNumber = Math.trunc(Math.random() * 19) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  const guessNr = Number(document.querySelector("#guess").value);
  if (guessNr === secretNumber) {
    document.querySelector("#secretNumberP").innerHTML = guessNr;
    document.querySelector("#msg").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#33A52D";
    if (score > highscore) {
      highscore = score;
      document.querySelector(
        "#highscore"
      ).textContent = `🔥 Highscore: ${highscore}`;
    }
  } else if (guessNr > secretNumber) {
    if (score > 0) {
      document.querySelector("#msg").textContent = "📈 To high!";
      score--;
      document.querySelector("#score").textContent = `💯 Score: ${score}`;
    } else {
      document.querySelector("#msg").textContent = "😢 You lost the game!";
    }
  } else if (guessNr < secretNumber) {
    if (score > 0) {
      document.querySelector("#msg").textContent = "📉 To low!";
      score--;
      document.querySelector("#score").textContent = `💯 Score: ${score}`;
    } else {
      document.querySelector("#msg").textContent = "😢 You lost the game!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("#secretNumberP").innerHTML = "?";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("#msg").textContent = "Start Guessing...";
  document.querySelector("#guess").textContent = "";
  score = 20;
  document.querySelector("#score").textContent = "💯 Score: 20";
  secretNumber = Math.trunc(Math.random() * 19 + 1);
  console.log(secretNumber);
});
