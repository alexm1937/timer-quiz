const olEl = document.getElementsByClassName('score-list')
var highScores = {};


function displayScores() {
    Array.from(highScores) = JSON.parse(localStorage.getItem("highScores"));
    consolelog(highScores)
    
    

}

displayScores();