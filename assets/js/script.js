const startButtonEl = document.getElementById('start-btn')
const nextButtonEl = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons');
var timerEl = document.getElementById('timer');
let shuffledQuestions, currentQuestionIndex = 0
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
            {text: "Cascading Stlye Source", correct: false},
            {text: "Condescending Style Sheets", correct: false}
        ]},{
            question: "Are there a diffencs between the languages of Java and JavaScript?",
            answers: [
                {text: "Yes, Java is a PROGRAMMING LANGUAGE, while JavaScript is a SCRIPTING LANGUAGE", correct: true},
                {text: "Yes, Java will only create applications to run in a Virtual Machine, while JavaScript will only run in a web browser",
                            correct: false},
                
            ]}
]
startButtonEl.addEventListener('click', startGame)
answerButtonsEl.addEventListener('click',() => {
        currentQuestionIndex++;
        setNextQuestion();
})




function countdown() {
    var timeLeft = 89;
        var timeInterval = setInterval(function(){
            if (timeLeft === 0) {
                timerEl.textContent = ' ';
                clearInterval(timeInterval);
                displayMessage();
                return;
              }
            if (timeLeft === 1) {
                timerEl.textContent = timeLeft + ' second remaining';
              } else {
              timerEl.textContent = timeLeft + ' seconds remaining';
              }
              timeLeft--;    
        }, 1000);
    }

function startGame() {
    startButtonEl.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -  .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    countdown()
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    if (shuffledQuestions.length >= currentQuestionIndex + 1) {
        questionEl.innerText = question.question
        question.answers.forEach(answer => {
            const button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        answerButtonsEl.appendChild(button)
        })
    } else {
        questionEl.innerText = "No questions left. Congratulations!"
        window.confirm("Nice job! You have answered all the questions. Would you like to save your score?");
        if (window.confirm = true) {
            window.prompt("Please Enter Your Intials!")
        } else return;
        
    }
    
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        startButtonEl.innerText = 'Restart'
        startButtonEl.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element) 
    if (correct) {
        element.classList.add('correct')
    } else { 
        element.classList.add('wrong')
    }
}

function resetState() {
    nextButtonEl.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}
