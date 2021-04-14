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

function resetSquares() {
    let squares = getAllSquares();
    let positions = getAllPositions();
    let i = 0;

    while (i < squares.length) {
        squares[i].style.top = positions[i].top;
        squares[i].style.left = positions[i].left;
        i += 1;
    }
}

function onWindowLoad() {
    resetGame();
}

function transformeTimeDigit(digit) {
    if (digit < 10) {
        return "0" + digit;
    }
    else {
        return digit;
    }
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

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    if (timer != null) {
        clearInterval(timer);
    }
}

function checkIfTheUserFinsishedTheGame()
{
    let squares = getAllSquares();
    let positions = getAllPositions();
    let i = 0;

    while (i < squares.length) {
        console.log(`checking square: ${i}`);
        if (squares[i].style.top != positions[i].top || squares[i].style.left != positions[i].left) {
            console.log(`squares[${i}].style.top: ${squares[i].style.top} `);
            console.log(`positions[${i}].top: ${positions[i].top} `);
            console.log(`squares[${i}].style.left: ${squares[i].style.left} `);
            console.log(`positions[${i}].left: ${positions[i].left} `);
            return
        } 

        i += 1;
    }
    
    completeGame();
}

function setMoves() {
    document.getElementById("moves-counter").innerHTML = moves;
}

function hideStartButton() {
    var startButton = document.getElementById("start-game-button");
    var bigStartButton = document.getElementById("big-start-game-button");

    document.querySelector('#start-game-button').innerText = 'Reset Game';
    bigStartButton.style.display = "none";
}

function startGame() {
    moves = 0;
    document.getElementById("moves-counter").innerHTML = moves;
    document.getElementById("time-counter").innerHTML = "00:00";
    hideStartButton();
    startGameTime();
    //randomiseSquares();
    gameState = GameStates.PLAYING;
}

function resetGame() {

    // Set variables
    moves = 0;
    gameState = GameStates.INITIAL;

    // Set HTML attributes
    document.getElementById("big-start-game-button").style.display = "flex";
    document.querySelector('#start-game-button').innerText = 'Start Game';
    document.getElementById("moves-counter").innerHTML = moves;
    document.getElementById("time-counter").innerHTML = "00" + ":" + "00" ;
    document.getElementById("compleated-screen").style.display = "none";

    resetTimer();
    resetSquares();
}

function completeGame() {
    resetTimer();
    var compleatedScreen = document.getElementById("compleated-screen");
    compleatedScreen.style.display = "flex";
    document.getElementById("finished-text").innerHTML = "Well done, you solved the puzzle using just " + moves + " moves with a total time of " + time + "!";
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

function saveToLeaderboard() {
    var data = new FormData();
    data.append('totalSeconds', totalSeconds);
    data.append('moves', moves);
    data.append('nickname', document.getElementById("nickname-input").value);

    let nickname = document.getElementById("nickname-input").value;
    if (nickname.length == 0) {
        alert("Must imput a nickname");
    }
    var xhr = new XMLHttpRequest();
    

    xhr.onreadystatechange = function() {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            
            console.log(xhr.status);
          window.location.href = '/';
        }
        else {
            console.log(xhr.readyState);
            console.log(xhr.status);
        }
    }

    xhr.open('POST', '/leaderboard', true);

    xhr.send(data);
    console.log(moves);
}

function toggleCreditCardDetails() {
    location.replace("https://www.buymeacoffee.com/jamesanglim");
}