// Functioning 8 Ball Magic Of Truth

// HTML Variables
let imgElOut = document.getElementById("imgEl");
let truthOut = document.getElementById("truthElOut");

// Event Listener
document.getElementById("imgEl").addEventListener("click", ballBtnClicked);

// FUNCTION
function ballBtnClicked() {
  // Ball Coding Math
  var question = document.getElementById("input").value;

  if (question === "") {
    truthOut.innerHTML = "<b>ANSWER - </b>Please ask a question...";
  } else {
    // Continue with the rest of the code here

    var randNum = Math.random();

    if (question === "Does a magic 8 ball actually work?") {
      truthOut.innerHTML = "<b>ANSWER - </b>How dare you doubt me!";
    } else if (question === "Is JavaScript awesome?") {
      truthOut.innerHTML = "<b>ANSWER - </b>Of Course!";
    } else if (randNum < 0.2) {
      truthOut.innerHTML = "<b>ANSWER - </b>Without a Doubt.";
    } else if (randNum < 0.4) {
      truthOut.innerHTML = "<b>ANSWER - </b>As I see it, yes.";
    } else if (randNum < 0.6) {
      truthOut.innerHTML = "<b>ANSWER - </b>Concentrate and ask again.";
    } else if (randNum < 0.1) {
      truthOut.innerHTML = "<b>ANSWER - </b>no one likes you (no)";
    } else if (randNum < 0.2) {
      truthOut.innerHTML = "<b>ANSWER - </b>My sources say no";
    } else if (randNum < 0.3) {
      truthOut.innerHTML = "<b>ANSWER - </b>My reply is no";
    } else if (randNum < 0.4) {
      truthOut.innerHTML = "<b>ANSWER - </b>Don’t count on it";
    } else if (randNum < 0.5) {
      truthOut.innerHTML = "<b>ANSWER - </b>Better not tell you now";
    } else if (randNum < 0.6) {
      truthOut.innerHTML = "<b>ANSWER - </b>Ask again later";
    } else if (randNum < 0.7) {
      truthOut.innerHTML = "<b>ANSWER - </b>Reply hazy, try again";
    } else if (randNum < 0.8) {
      truthOut.innerHTML = "<b>ANSWER - </b>Without a doubt";
    } else if (randNum < 0.9) {
      truthOut.innerHTML = "<b>ANSWER - </b>It is decidedly so";
    } else if (randNum < 0.98) {
      truthOut.innerHTML = "<b>ANSWER - </b> It is certain";
    } else if (randNum < 0.99) {
      truthOut.innerHTML = "May the cosmos be with you!";
    } else if (randNum < 0.8) {
      truthOut.innerHTML = "<b>ANSWER - </b>Don't count on it.";
    } else {
      truthOut.innerHTML = "<b>ANSWER - </b>Outlook not so good.";
    }
  }
}
