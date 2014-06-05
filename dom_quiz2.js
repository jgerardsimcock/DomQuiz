(function(){

var i = 0;
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

question.innerHTML = questionList[i]; 

submit.onclick = function (){
  if (answer.value == answerList[i]) {
    console.log("Answer is Right");
    answer.value = null;
    i++;
    question.innerHTML = questionList[i];
    score++;
  } else {
    answer.value = null;
    question.innerHTML = questionList[i];
    i++;
  }

  if(i >= questionList.length){
    body.removeChild(answer);
    body.removeChild(submit);
    question.innerHTML = "Thanks for playing. Your score is " + score;
  } 

}

})();