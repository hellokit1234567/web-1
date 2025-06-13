// script.js

const facts = [
  "I survived my first ever all-nighter on a management video assignment!",
  "Made friends for life during hostel night-outs.",
  "Joined club activities and all nighter funs and still managed to pass all my courses!",
  "Completed my first robotics project in under 10 days!",
];  

function askQuestion() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const factDisplay = document.getElementById("fact-display");
  factDisplay.textContent = facts[randomIndex];
}

