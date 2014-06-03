(function(){

// var score = 0

// var question = ["Where are biggest waves in Oahu?", "What is the freaky wave called near Portlock?", "What is the name of the beach park where Pipeline is located?", "What is a surfboard made of?", "What is the middle wodden spine of a surfboard called?", "What are young surfers called?"];
// var response = ["Waimea", "China Walls", "Ehukai", "Foam", "Stringer", "Wax", "Groms"];

// for (var i = 0; i < question.length; i++) {


var response = document.getElementById("question");
response.innerHTML = response.innerHTML.replace("", "Where are biggest waves in Oahu?"); /*I removed question[i]*/

function checkAnswer(){
  document.getElementById("answer").submit();
    if (answer = "Waimea") {
      alert("Right on!");
      ++score;
      }
    else {
      alert("Sorry, wrong answer!");
    }
};


})();