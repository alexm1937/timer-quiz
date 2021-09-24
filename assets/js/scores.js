const olEl = document.getElementsByClassName('score-list')
var highScores = {};


function displayScores {
    highScores = JSON.parse(localStorage.getItem("highScores"));
    if (!highScores) {
        alert("There are no saved scores! Please take quiz, save score and check back!")
    }
    else {
    

}

displayScores();