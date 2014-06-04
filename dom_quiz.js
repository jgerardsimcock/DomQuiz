(function(){

var questionCount = 0;
var score = 0;
var question = document.getElementById("question");
var answer = document.getElementById("answer");



var questionList = [
  "Where are biggest waves in Oahu?", 
  "What is the freaky wave called near Portlock?", 
  "What is the name of the beach park where Pipeline is located?", 
  "What is a surfboard made of?", 
  "What is the middle wodden spine of a surfboard called?", 
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


document.getElementById("question").innerHTML = questionList[i]; 

for (var i = 0; i < questionList.length; i++) 
{
  for( var j =0; j < answerList.length; j++) {
  
}
  submit.onclick = function (){
    document.getElementById("answer");
      if (answer = answerList[i]) {
      alert("Right on!");
      ++score;
      } 
      else {
      alert("Sorry, wrong answer!");
      }
   }
  }
++ questionCount; 

var finalScore = score.answer.length;
alert(finalScore);


})();