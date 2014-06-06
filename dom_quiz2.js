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

question.innerHTML = "Let's take a quiz. Hit the submit button to start!" 

submit.onclick = function (){
  if (answer.value == answerList[i]) {
    console.log("Answer is Right");
    answer.value = null;
    i++; //increments question up
    question.innerHTML = questionList[i]; //set question content to next string in array
    score++;
  } else {
    answer.value = null;
    question.innerHTML = questionList[i]; //set question content to next string in array
    i++;
  }

  if(i >= questionList.length){
    body.removeChild(answer); //removes the input field
    body.removeChild(submit); //removes the submit button
    question.innerHTML = "Thanks for playing. Your score is " + score; //removes question and displays final score
  } 

}

})();