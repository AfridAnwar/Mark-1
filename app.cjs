var readlinesync = require("readline-sync");
var score = 0;
// data structure
var question = [
  {
    question: "Do you know Afrid ",
    answer: "yes",
  },
  {
    question: "Where do Nazeem lives",
    answer: "Saudi",
  },
  {
    question: "what is the highest qualification Afrid completed ",
    answer: "BCA",
  },
  {
    question: "Where did Afrid completed his degree ",
    answer: "Mangalore",
  },
  {
    question: "how good is afrid with computer in a scale of :(1 to 10 ) ",
    answer: "5",
  },
];

function welcome() {
  var userName = readlinesync.question("what is your name ");
  console.log("Hey " + userName + "Welcome to DO YOU KNOW AFRID (@_@) ");
}

function quiz(question, answer) {
  var current_answer = readlinesync.question(question);

  if (current_answer.toUpperCase() === answer.toUpperCase()) {
    console.log("true");
    score++;
  } else {
    console.log("false");
  }
}

function play() {
  for (var i = 0; i < question.length; i++) {
    var value1 = question[i];
    quiz(value1.question, value1.answer);
  }
}

function final_score() {
  console.log("-----------------------------");
  console.log("Thank you for playing the quiz ");
  console.log("Final : " + score);
  console.log("===================================");
}

// calling the function
welcome();
play();
final_score();
