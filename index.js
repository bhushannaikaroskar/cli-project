var readlineSync = require('readline-sync');

var score = 0;
var exit = false;


var username = readlineSync.question('What is your name? ');
console.log("\n\nHello " + username + " welcome to my quiz \nHere I will ask questions about myself \nLets see how much you know me\n");

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
    question: "Where do I work? ",
    answer: "Jobless"
  }
];


while (!exit) {

  console.log("Press \'e\' in the answer anytime to exit\n\n")

  for (var i = 0; i < questions.length; i++) {
    var isExit = play(questions[i].question, questions[i].answer);
    if(isExit){
      break;
    }
  }
  console.log("Your score for the quiz is " + score);
  console.log("quiz ended\n\n");

  for(var i=0 ; i<highscores.length ; i++){
    if(score >= highscores[i].score ){
      console.log(username+"\t\t" + score);
      console.log(highscores[i].name + "\t\t" + highscores[i].score);
      score = 0;
    }else{
      console.log(highscores[i].name + "\t\t" + highscores[i].score);
    }
  }


  
  console.log("Want to retake the quiz?" );
  exit = readlineSync.keyInYN("Press y to continue or n to end ");
  exit = !exit;
  console.log("\n\n");

  score= 0;

}
