var questions = [
    question1 = {
        text: "What are variables used for in JavaScript Programs?",
        choice1: "Storing numbers, dates, or other values",
        choice2: "Varying randomly",
        choice3: "Causing high-school algebra flashbacks",
        choice4: "None of the above",
        correctAnswer: 1
     },
     question2 = {
        text: "Inside which HTML element do we put the JavaScript?",
        choice1: "<js>",
        choice2: "<scripting>",
        choice3: "<script>",
        choice4: "<javscript>",
        correctAnswer : 3
     },
     question3 ={
        text: "Which of the following is the structure of an if statement?",
        choice1: "if (conditional expression is true) thenexecute this codeend if",
        choice2: "if (conditional expression is true)execute this codeend if",
        choice3: "if (conditional expression is true)   {then execute this code>->}",
        choice4: "if (conditional expression is true) then {execute this code}",
        correctAnswer: 3
     },
     question4 ={
        text: "What is meant by 'this' keyword in javascript?",
        choice1: "It refers current object",
        choice2: "It referes previous object",
        choice3: "It is variable which contains value",
        choice4: "None of the above",
        correctAnswer: 1
     },
     question5 ={
        text: "Which of the following is not JavaScript Data Types?",
        choice1: "Undefined",
        choice2: "Number",
        choice3: "Boolean",
        choice4: "Float",
        correctAnswer: 1
     }
];

var btn = document.getElementById("start");
var timerEl = document.getElementById("time");
var questionsEl = document.getElementById("questions");
var questionSpan = document.getElementById("questions");

btn.addEventListener("click", startQuiz);

function checkAnswer(){
    
}

function startQuiz() {
    var timeLeft = 75;
    showQuestions(0);
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft;
      
      if (timeLeft === 0) {
        clearInterval(timeInterval);
       // displayMessage();
      }
      timeLeft--;
      //displayMessage();
    },1000);
  }

  function showQuestions(n) {
    questionsEl.textContent = questions[n].text;

    var rb1 = document.createElement("INPUT");
    var rb2 = document.createElement("INPUT");
    var rb3 = document.createElement("INPUT");
    var rb4 = document.createElement("INPUT");

    var label1 = document.createElement("label");
    var label2 = document.createElement("label");
    var label3 = document.createElement("label");
    var label4 = document.createElement("label");

    rb1.setAttribute("type", "radio");
    rb1.setAttribute("name", "choice");
    rb1.setAttribute("value", 1);
   rb1.onclick = checkAnswer();

    rb2.setAttribute("type", "radio");
    rb2.setAttribute("name", "choice");
    rb2.setAttribute("value", 2);

    rb3.setAttribute("type", "radio");
    rb3.setAttribute("name", "choice");
    rb3.setAttribute("value", 3);

    rb4.setAttribute("type", "radio");
    rb4.setAttribute("name", "choice");
    rb4.setAttribute("value", 4);

    
    label1.textContent = questions[n].choice1
    label2.textContent = questions[n].choice2
    label3.textContent = questions[n].choice3
    label4.textContent = questions[n].choice4

    var ulEl = document.createElement("ul");
    ulEl.style.listStyleType = "none";

    var liEl1 = document.createElement("li");
    var liEl2 = document.createElement("li");
    var liEl3 = document.createElement("li");
    var liEl4 = document.createElement("li");
    
    liEl1.appendChild(rb1);
    liEl1.appendChild(label1);

    liEl2.appendChild(rb2);
    liEl2.appendChild(label2);

    liEl3.appendChild(rb3);
    liEl3.appendChild(label3);

    liEl4.appendChild(rb4);
    liEl4.appendChild(label4);

    ulEl.appendChild(liEl1);
    ulEl.appendChild(liEl2);
    ulEl.appendChild(liEl3);
    ulEl.appendChild(liEl4);

     questionsEl.appendChild(ulEl);
  }