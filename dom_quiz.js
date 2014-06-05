(function(){

var counter = 0;
var score = 0;
var question = document.getElementById("question");
var answer = document.getElementById("answer");



var questionList = [
  "Where are biggest waves in Oahu?", 
  "What is the freaky wave called near Portlock?", 
  "What is the name of the beach park where Pipeline is located?", 
  "What is a surfboard made of?", 
  "What is the middle wodden spine of a surfboard called?", 
  "What do you put on surfboards to make them sticky",
  "What are young surfers called?"
  ];

var answerList = [
  "Waimea", 
  "China Walls", 
  "Ehukai", 
  "Foam", 
  "Stringer", 
  "Wax", 
  "Groms"
  ];

  question.innerHTML = "Do you want to take a Quiz";

  submit.onclick = function (){
    if(answer.value == "no"){
      alert("ok!");
    }
    else{
      answer.value = "";

  
  
  question.innerHTML = questionList[counter];
  

  submit.onclick = function (){
      if (answer.value == answerList[counter]) {
      ++score;
      counter++;
      } 
      else {
      counter++;
      }

    question.innerHTML = questionList[counter]; 
    answer.value = "";    

  if(counter > questionList.length) 
  {

    alert("Thanks for taking the quiz. Your score is " + score); 
    question.innerHTML = "No more questions!";
  }


})();

// for (var i = 0; i < questionList.length; i++) questionList[i] = i; {
  // for( var j =0; j < answerList.length; j++) answerList[j] = j; {



// var finalScore = score.answer.length;
// alert(finalScore);
