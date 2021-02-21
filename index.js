function Question(q, a, b, co) {
  this.q = q;
  this.a = a;
  this.b = b;
  this.co = co;
}

var ques1 = new Question("Who is the Prime Minister of India ? ", "Narendra Modi", "Manmohan Singh", "Narendra Modi");
var ques2 = new Question("Who is the President of India ? ", "Pratibha Patil", "Ram Nath Kovind", "Ram Nath Kovind");
var ques3 = new Question("What is the national game of India ? ", "Hockey", "Cricket", "Hockey");
var ques4 = new Question("What is Capital City of India ? ", "Lucknow", "Delhi", "Delhi");

var ques = [ques1, ques2, ques3, ques4];
var i = 0,
  score = 0;

function display() {
  if (i >= 4) {
    document.querySelector("h2").innerHTML = "Quiz Over !";
    document.querySelector(".score").innerHTML = "Your Final Score is : " + score;
    document.querySelector(".container").style.visibility = "hidden";
  } else {
    document.querySelector(".ques").innerHTML = ques[i].q;
    document.querySelector(".opt1").innerHTML = ques[i].a;
    document.querySelector(".opt2").innerHTML = ques[i].b;
    i++;
  }
}
display();

document.querySelector(".next").addEventListener("click", function() {
  if (i <= 4) {
    display();
  }
})

function checkAnswer(selectedAnswer) {
  if (selectedAnswer === ques[i - 1].co) {
    score++;
    return true;
  } else {
    return false;
  }
}

function updateScore() {
  document.querySelector(".score").innerHTML = score;
}

var options = document.querySelectorAll(".options").length;

for (var j = 0; j < options; j++) {
  document.querySelectorAll(".options")[j].addEventListener("click", function() {
    var isCorrect = checkAnswer(this.innerHTML);
    if (isCorrect) {
         document.querySelector(".align").classList.add("correct");
         setTimeout(function(){
           document.querySelector(".align").classList.remove("correct");
         },500)
    } else {
      document.querySelector(".align").classList.add("wrong");
      setTimeout(function(){
        document.querySelector(".align").classList.remove("wrong");
      },500)
    }
    updateScore();
    display();
  })
}
