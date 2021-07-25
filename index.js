var readlineSync = require('readline-sync');

var score = 0;
var exit = false;
var username;


function greeting(){
  username = readlineSync.question('What is your name? ');
  console.log("\n\nHello " + username + " welcome to my quiz \nHere I will ask questions about myself \nLets see how much you know me\n");
  console.log("Press \'e\' in the answer anytime to exit\n\n");
}

function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  if(userAnswer === 'e'){
    return true;
  }

  //console.log(question);
  if (answer.toLowerCase() === userAnswer.toLowerCase()) {
    console.log("you are Right!");
    score=score+1;
    
  }
  else {
    console.log("You are wrong.");
    console.log("Right answer is", answer);
  }
  console.log("Score:", score);
  console.log('--------------------------');

  return false;

}

function playGame(){
  for (var i = 0; i < questions.length; i++) {
    var isExit = play(questions[i].question, questions[i].answer);
    if(isExit){
      break;
    }
  }
  console.log("Your score for the quiz is " + score);
  console.log("quiz ended\n\n");

}

function displayHighScores(){
  for(var i=0 ; i<highscores.length ; i++){
    if(score >= highscores[i].score ){
      console.log(username+"\t\t" + score);
      console.log(highscores[i].name + "\t\t" + highscores[i].score);
      score = 0;
    }else{
      console.log(highscores[i].name + "\t\t" + highscores[i].score);
    }
  }
}


var highscores = [
  
  {
    name: "Sahil",
    score: 4
  },
  {
    name: "Meetkumar",
    score: 4
  },
  {
    name: "Sachin",
    score: 3
  }
];


var questions = [
  {
    question: "Where do I live? ",
    answer: "Mumbai",
    options: [
      "Mumbai", "Pune", "Chennai","Banglore"
    ]
  }, {
    question: "My favourite superhero would be ",
    answer: "Iron-Man"
  }, {
    question: "What's my favourite food item? ",
    answer: "Vada pav"
  }, {
    question: "Where do I study? ",
    answer: "KJ Somaiya"
  }, {
    question: "Whats my favourite programming language",
    answer: "Javascript"
  }
];


while (!exit) {

  greeting();
  playGame();
  displayHighScores();


  
  console.log("Want to retake the quiz?" );
  exit = readlineSync.keyInYN("Press y to continue or n to end ");
  exit = !exit;
  console.log("\n\n");

  score= 0;

}
