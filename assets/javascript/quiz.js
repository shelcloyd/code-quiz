// questions
let question1 = "What symbol is used to call an 'id' in CSS?";
let question2 = "What does HTML stand for?";
let question3 = "Arrays in JavaScript can be used to store ______.";
let question4 = "What coding language is used for the structure of a webpage?";
// answers
let answer1 = "#";
let answer2 = "Hypertext Markup Language";
let answer3 = "numbers and strings";
let answer4 = "HTML";
// q&a arrays
let questionList = [question1, question2, question3, question4];
let answerList = [answer1, answer2, answer3, answer4];
// question order start
let increment = 0
// timer start
let sec = 60;

let score = 0;

// TIMER
function startTimer() {
    var timer = setInterval(function () {
        sec--;
        var time = document.getElementById('countdown')
        if (typeof(time) != 'undefined' && time != null)
    {
        time.innerHTML = sec;
    }
        if (sec < 0) {
            clearInterval(timer);
            window.location.href = '../../gratz.html';
            localStorage.setItem("score", JSON.stringify(score));
            let retrievedScore = localStorage.getItem("score");
            retrievedScore.push("gratz.js");
        }
    }, 1000);
}
//  when question is answered incorrectly
function subTime() {
    sec -= 15;
    document.getElementById("countdown").innerHTML = sec;
};
startTimer();

// QUESTIONS
function newQuestion(num) {
    let display = document.getElementById("question");
    display.textContent = questionList[num];
}

// ANSWERS
function checkAnswer(num) {
    let userInput = document.getElementById("answer").value;
    if (userInput === answerList[num]) {
        score = score + 25;
        console.log(score);
        return score;
    } else {
        subTime();
    }
}

if (typeof(document.getElementById("submit")) != 'undefined' && document.getElementById("submit") != null)
{
document.getElementById("submit").onclick = function () {
    checkAnswer(increment);
    increment++
    newQuestion(increment);
    if (increment >= 4) {
        window.location.href = '../../gratz.html';
        localStorage.setItem("score", JSON.stringify(score));
        let retrievedScore = localStorage.getItem("score");
        retrievedScore.push("gratz.js");
    }
}
}
newQuestion(increment);

function displayPoints (num) {
    console.log(score)
    let myPoints = document.getElementById("points")
    if (typeof(myPoints) != 'undefined' && myPoints != null)
    {
        myPoints.innerText = score
        console.log(myPoints.innerText)
    } 
}