const startButtonEl = document.getElementById('start-btn')
const restartButtonEl = document.getElementById('restart-btn')
const endMessageEl = document.getElementById('end-message')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons');
var timerEl = document.getElementById('timer');
let shuffledQuestions, currentQuestionIndex = 0;
var time;
var timerId;
const highScoresArr = JSON.parse(localStorage.getItem("highScoresArr")) || []
const questions = [
    {
     question: "What language gives a browser the basic markup to create a page on the internet?",
     answers: [
         {text: "CSS", correct: false},
         {text: "Git", correct: false},
         {text: "HTML", correct: true},
         {text: "Markdown", correct: false}
    ]},{
        question: "What does 'CSS' stand for?",
        answers: [
            {text: "Casper's Style Sheet", correct: false},
            {text: "Cascading Style Sheets", correct: true},
            {text: "Cascading Style Source", correct: false},
            {text: "Condescending Style Sheets", correct: false}
        ]},{
            question: "Is there a difference between the languages of Java and JavaScript?",
            answers: [
                {text: "Yes, Java is a PROGRAMMING LANGUAGE, while JavaScript is a SCRIPTING LANGUAGE", correct: true},
                {text: "Yes, Java will only create applications to run in a Virtual Machine, while JavaScript will only run in a web browser",
                            correct: false},
                
            ]}
]
restartButtonEl.addEventListener('click', startGame)
startButtonEl.addEventListener('click', startGame)
answerButtonsEl.addEventListener('click',() => {
    //How to select class?
    if (answerButtonsEl.class = false) { 
        time -= 10;
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++;
        resetState();
        setNextQuestion();
    } else { 
        clockTick();
        endGame();
    }})

function clockTick() {
    if (shuffledQuestions.length >= currentQuestionIndex + 1 && time >= 0) {
    time--;
    timerEl.textContent = time + " Seconds Remaining";
    }
}

function startGame() { 
    startButtonEl.classList.add('hide')
    restartButtonEl.classList.add('hide')
    endMessageEl.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -  .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    timerId = setInterval(clockTick, 1000)
    time = 90
    timerEl.textContent = time;
    clockTick();
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
            button.classList.add('correct')            
        } else {
            button.classList.add('false')
        }
        answerButtonsEl.appendChild(button)
})}

function resetState() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function endGame() {
    clearInterval(timerId);
    endMessageEl.classList.remove('hide')
    answerButtonsEl.classList.add('hide')
    questionContainerEl.classList.add('hide')
    restartButtonEl.classList.remove('hide')
    //CREATE RESTART BUTTON
    //CREATE SAVE BUTTON

}


//     var msgSave = "Would you like to save your score?";
//     
//     if (confirm(msgSave)) {
//         saveScore()
//     } 
//     if (confirm(msgTryAgain)) {
//         restartGame();
//     }
// }

function restartGame() {
    resetState();
    shuffledQuestions = questions.sort(() => Math.random() -  .5)
    currentQuestionIndex = 0
    time = 91
    setNextQuestion();
}

function saveScore() { 
    var initials = window.prompt("Please enter your initials!")
    const score = {
        name: initials,
        timeScore: time
    };
    highScoresArr.push(JSON.stringify(score));
    console.log(highScoresArr);
    localStorage.setItem("highScoresArr", highScoresArr)
    // var msgTryAgain = "Would you like to try again?";
    // if (confirm(msgTryAgain)) {
    // restartGame();
    // } else {
    //     stopGame();
    // }
}



    // var save = []
    // console.log(initials, score)
    // save.push(JSON.stringify(score))
    // save.push(initials)
    // localStorage.setItem(initials, save)
    // console.log(save)
    // localStorage.setItem('Initials', initials)
    // localStorage.setItem('Score', score)




// answerButtonsEl.correct.addEventListener('click',() => {
//         currentQuestionIndex++;
//         setNextQuestion();
// })
// answerButtonsEl.false.addEventListener('click',() => {
//     currentQuestionIndex++;
//     setNextQuestion();
// })
// function setStatusClass(element, correct) {
//     clearStatusClass(element) 
//     if (correct) {
//         element.classList.add('correct')
//     } else { 
//         element.classList.add('wrong')
//     }
// }    // startButtonEl.innerText = 'Restart'
    // startButtonEl.classList.remove('hide')
    
    
    //const correct = selectedButton.dataset.correct
    // setStatusClass(document.body, correct)
    // Array.from(answerButtonsEl.children).forEach(button => {
    //     setStatusClass(button, button.dataset.correct)
    // })