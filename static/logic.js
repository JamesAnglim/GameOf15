window.onload = onWindowLoad;

let GameStates = {
    INITIAL: "INITIAL",
    PLAYING: "PLAYING",
    COMPLETE: "COMPLETE"
};

let moves = 0;
let totalSeconds = 0;
let time = 0;
let timer = null;
let gameState = GameStates.INITIAL;
let nickname = "james";



function moveSquare(element) {

    let emptySquare = document.getElementById("square-empty");
    let topPosition = element.offsetTop;
    let leftPosition = element.offsetLeft;

    if (emptySquare.offsetTop + 112 == topPosition && emptySquare.offsetLeft == leftPosition) {
        moveSquareUp(element);
        moves += 1;
    }
    else if (emptySquare.offsetLeft + 112 == leftPosition && emptySquare.offsetTop == topPosition) {
        moveSquareLeft(element);
        moves += 1;
    }
    else if (emptySquare.offsetLeft - 112 == leftPosition && emptySquare.offsetTop == topPosition) {
        moveSquareRight(element);
        moves += 1;
    }
    else if (emptySquare.offsetTop - 112 == topPosition && emptySquare.offsetLeft == leftPosition) {
        moveSquareDown(element);
        moves += 1;
    }

    setMoves();
    checkIfTheUserFinsishedTheGame();
}

function moveSquareDown(element) {
    let emptySquare = document.getElementById("square-empty");
    let topPosition = element.offsetTop;
    element.style.top = topPosition + 112 + "px";
    emptySquare.style.top = topPosition + "px";
}

function moveSquareUp(element) {
    let emptySquare = document.getElementById("square-empty");
    let topPosition = element.offsetTop;
    element.style.top = topPosition - 112 + "px";
    emptySquare.style.top = topPosition + "px";
}

function moveSquareRight(element) {
    let emptySquare = document.getElementById("square-empty");
    let leftPosition = element.offsetLeft;
    element.style.left = leftPosition + 112 + "px";
    emptySquare.style.left = leftPosition + "px";
}

function moveSquareLeft(element) {
    let emptySquare = document.getElementById("square-empty");
    let leftPosition = element.offsetLeft;
    element.style.left = leftPosition - 112 + "px";
    emptySquare.style.left = leftPosition + "px";
}

function resetSquares() {

    let square1 = document.getElementById("square1");
    let square2 = document.getElementById("square2");
    let square3 = document.getElementById("square3");
    let square4 = document.getElementById("square4");
    let square5 = document.getElementById("square5");
    let square6 = document.getElementById("square6");
    let square7 = document.getElementById("square7");
    let square8 = document.getElementById("square8");
    let square9 = document.getElementById("square9");
    let square10 = document.getElementById("square10");
    let square11 = document.getElementById("square11");
    let square12 = document.getElementById("square12");
    let square13 = document.getElementById("square13");
    let square14 = document.getElementById("square14");
    let square15 = document.getElementById("square15");
    let emptySquare = document.getElementById("square-empty");

    let gap = "12px";
    let gameBoardMargin = "30px";
    let bigGap = "142px";
    let biggerGap = "254px";
    let largeGap = "366px";

    square1.style.left = gameBoardMargin;
    square1.style.top = gameBoardMargin;

    square2.style.left = bigGap;
    square2.style.top = gameBoardMargin;

    square3.style.left = biggerGap;
    square3.style.top = gameBoardMargin;

    square4.style.left = largeGap;
    square4.style.top = gameBoardMargin;

    square5.style.left = gameBoardMargin;
    square5.style.top = bigGap;

    square6.style.left = bigGap;
    square6.style.top = bigGap;

    square7.style.left = biggerGap;
    square7.style.top = bigGap;

    square8.style.left = largeGap;
    square8.style.top = bigGap;

    square9.style.left = gameBoardMargin;
    square9.style.top = biggerGap;

    square10.style.left = bigGap;
    square10.style.top = biggerGap;

    square11.style.left = biggerGap;
    square11.style.top = biggerGap;

    square12.style.left = largeGap;
    square12.style.top = biggerGap;

    square13.style.left = gameBoardMargin;
    square13.style.top = largeGap;

    square14.style.left = bigGap;
    square14.style.top = largeGap;

    square15.style.left = biggerGap;
    square15.style.top = largeGap;

    emptySquare.style.left = largeGap;
    emptySquare.style.top = largeGap;

}

function onWindowLoad() {
    document.getElementById("compleated-screen").style.display = "none";
    document.getElementById("reset-game-button").style.display = "none";
    resetSquares();
}

function startGameTime()
{
    resetTimer();

    var startTime = new Date().getTime();

    // Update the count down every 1 second
    timer = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = now - startTime;

      // Time calculations for days, hours, minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      totalSeconds = seconds + minutes * 60;

      minutesTransformed = transformeTimeDigit(minutes);
      secondsTranformed = transformeTimeDigit(seconds);
      time = minutesTransformed + ":" + secondsTranformed
      // Display the result in the element with id="demo"
      document.getElementById("time-counter").innerHTML = minutesTransformed + ":" + secondsTranformed;

    }, 1000);

}

function transformeTimeDigit(digit) {
    if (digit < 10) {
        return "0" + digit;
    }
    else {
        return digit;
    }
}

function stopTimer() {
    clearInterval(timer);
}

function checkIfTheUserFinsishedTheGame()
{
    let square1 = document.getElementById("square1");
    let square1Left = square1.offsetLeft;
    let square1Top = square1.offsetTop;

    let square2 = document.getElementById("square2");
    let square2Left = square2.offsetLeft;
    let square2Top = square2.offsetTop;

    let square3 = document.getElementById("square3");
    let square3Left = square3.offsetLeft;
    let square3Top = square3.offsetTop;

    let square4 = document.getElementById("square4");
    let square4Left = square4.offsetLeft;
    let square4Top = square4.offsetTop;

    let square5 = document.getElementById("square5");
    let square5Left = square5.offsetLeft;
    let square5Top = square5.offsetTop;

    let square6 = document.getElementById("square6");
    let square6Left = square6.offsetLeft;
    let square6Top = square6.offsetTop;

    let square7 = document.getElementById("square7");
    let square7Left = square7.offsetLeft;
    let square7Top = square7.offsetTop;

    let square8 = document.getElementById("square8");
    let square8Left = square8.offsetLeft;
    let square8Top = square8.offsetTop;

    let square9 = document.getElementById("square9");
    let square9Left = square9.offsetLeft;
    let square9Top = square9.offsetTop;

    let square10 = document.getElementById("square10");
    let square10Left = square10.offsetLeft;
    let square10Top = square10.offsetTop;

    let square11 = document.getElementById("square11");
    let square11Left = square11.offsetLeft;
    let square11Top = square11.offsetTop;

    let square12 = document.getElementById("square12");
    let square12Left = square12.offsetLeft;
    let square12Top = square12.offsetTop;

    let square13 = document.getElementById("square13");
    let square13Left = square13.offsetLeft;
    let square13Top = square13.offsetTop;

    let square14 = document.getElementById("square14");
    let square14Left = square14.offsetLeft;
    let square14Top = square14.offsetTop;

    let square15 = document.getElementById("square15");
    let square15Left = square15.offsetLeft;
    let square15Top = square15.offsetTop;


    if (square1Left == "30" && square1Top == "30" && square2Left == "142" && square2Top == "30" && square3Left == "254" && square3Top == "30" && square4Left == "366" && square4Top == "30" &&
        square5Left == "30" && square5Top == "142" && square6Left == "142" && square6Top == "142" && square7Left == "254" && square7Top == "142" && square8Left == "366" && square8Top == "142" &&
        square9Left == "30" && square9Top == "254" && square10Left == "142" && square10Top == "254" && square11Left == "254" && square11Top == "254" && square12Left == "366" && square12Top == "254" &&
        square13Left == "30" && square13Top == "366" && square14Left == "142" && square14Top == "366" && square15Left == "254" && square15Top == "366") {
        completeGame();
    }
}

function startGame() {
    moves = 0;
    document.getElementById("moves-counter").innerHTML = moves;
    document.getElementById("time-counter").innerHTML = "00:00";
    hideStartButton();
    startGameTime();
    randomiseSquares();
    gameState = GameStates.PLAYING;
}

/*$.ajax({
    type: "POST",
    url: "{{ url_for("get_post_json") }}",
    contentType: "application/json",
    data: JSON.stringify({hello: "world"}),
    dataType: "json",
    success: function(response) {
        console.log(response);
    },
    error: function(err) {
        console.log(err);
    }
});*/

function setMoves() {
    document.getElementById("moves-counter").innerHTML = moves;
}

function hideStartButton() {
    var startButton = document.getElementById("start-game-button");
    var bigStartButton = document.getElementById("big-start-game-button");

    document.querySelector('#start-game-button').innerText = 'Reset Game';
    bigStartButton.style.display = "none";
}

function resetGame() {
    moves = 0;
    var bigStartButton = document.getElementById("big-start-game-button");
    document.querySelector('#start-game-button').innerText = 'Start Game';
    bigStartButton.style.display = "flex";
    document.getElementById("moves-counter").innerHTML = moves;
    document.getElementById("time-counter").innerHTML = "00" + ":" + "00" ;
    gameState = GameStates.INITIAL;
    resetTimer();
    document.getElementById("compleated-screen").style.display = "none";
}

function completeGame() {
    resetTimer();
    var compleatedScreen = document.getElementById("compleated-screen");
    compleatedScreen.style.display = "flex";
    document.getElementById("finished-text").innerHTML = "Well done, you solved the puzzle using just " + moves + " moves with a total time of " + time + "!";
    document.getElementById("test").innerHTML = time + moves + "moves";
    gameState = GameStates.COMPLETE;


}

function toggleGameState() {
    if (gameState == GameStates.INITIAL) {
        startGame();
    }
    else {
        resetGame();
    }
}

function resetTimer() {
    if (timer != null) {
        clearInterval(timer);
    }
}

function randomiseSquares() {
    let squares = getAllSquares();
    let positions = getAllPositions();
    shuffle(squares);

    let i = 0;

    while (i < squares.length) {
        let square = squares[i];
        let position = positions[i]

        square.style.top = position.top;
        square.style.left = position.left;

        i++;
    }
}

function getAllSquares() {
    let square1 = document.getElementById("square1");
    let square2 = document.getElementById("square2");
    let square3 = document.getElementById("square3");
    let square4 = document.getElementById("square4");
    let square5 = document.getElementById("square5");
    let square6 = document.getElementById("square6");
    let square7 = document.getElementById("square7");
    let square8 = document.getElementById("square8");
    let square9 = document.getElementById("square9");
    let square10 = document.getElementById("square10");
    let square11 = document.getElementById("square11");
    let square12 = document.getElementById("square12");
    let square13 = document.getElementById("square13");
    let square14 = document.getElementById("square14");
    let square15 = document.getElementById("square15");
    let emptySquare = document.getElementById("square-empty");

    return [
        square1,
        square2,
        square3,
        square4,
        square5,
        square6,
        square7,
        square8,
        square9,
        square10,
        square11,
        square12,
        square13,
        square14,
        square15,
        emptySquare
        ]
}

function getAllPositions() {
    let gameBoardMargin = "30px";
    let bigGap = "142px";
    let biggerGap = "254px";
    let largeGap = "366px";

    let position1 = {
        top: gameBoardMargin,
        left: gameBoardMargin,
    }

    let position2 = {
        top: gameBoardMargin,
        left: bigGap,
    }

    let position3 = {
        top: gameBoardMargin,
        left: biggerGap,
    }

    let position4 = {
        top: gameBoardMargin,
        left: largeGap,
    }

    let position5 = {
        top: bigGap,
        left: gameBoardMargin,
    }

    let position6 = {
        top: bigGap,
        left: bigGap,
    }

    let position7 = {
        top: bigGap,
        left: biggerGap,
    }

    let position8 = {
        top: bigGap,
        left: largeGap,
    }

    let position9 = {
        top: biggerGap,
        left: gameBoardMargin,
    }

    let position10 = {
        top: biggerGap,
        left: bigGap,
    }

    let position11 = {
        top: biggerGap,
        left: biggerGap,
    }

    let position12 = {
        top: biggerGap,
        left: largeGap,
    }

    let position13 = {
        top: largeGap,
        left: gameBoardMargin,
    }

    let position14 = {
        top: largeGap,
        left: bigGap,
    }

    let position15 = {
        top: largeGap,
        left: biggerGap,
    }

    let position16 = {
        top: largeGap,
        left: largeGap,
    }

    return [
        position1,
        position2,
        position3,
        position4,
        position5,
        position6,
        position7,
        position8,
        position9,
        position10,
        position11,
        position12,
        position13,
        position14,
        position15,
        position16,
        ]
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/*function toggleCreditCardDetails {
hhh
}*/

function saveToLeaderboard() {
    var data = new FormData();
    data.append('totalSeconds', totalSeconds);
    data.append('moves', moves);
    data.append('nickname', document.getElementById("nickname-input").value);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/leaderboard', true);

    xhr.send(data);
    console.log(moves);
}