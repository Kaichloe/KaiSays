const COLORS = ["red","green", "blue", "yellow"]

const randomComments = ["ok", "I see you", "Not bad", "You smart", "BIG MONEY", "OK", "OK I SEE YOU", 
"Keys to success"]

const INSTRUCTIONS = "Repeat the sequence of colors each round "

let Kai = {
  sequence: [],
  playerInput: [],
  gameOn: false,
  gameOver: false,
  difficultyLevel: "Easy",
  level: 1
}

// grabbing all the html elements
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const green = document.getElementById("green");

const clearFlash = () => {
  red.style.backgroundColor = "#E01E5A";
  red.style.border = "8px solid black";
  yellow.style.backgroundColor = "#FFEB3B";
  yellow.style.border = "8px solid black";
  blue.style.backgroundColor = "#36C5F0";
  blue.style.border = "8px solid black";
  green.style.backgroundColor = "#2EB67D";
  green.style.border = "8px solid black";
}

const audioYellow = document.getElementById("yellowClip");
const audioRed = document.getElementById("redClip");
const audioBlue = document.getElementById("blueClip");
const audioGreen = document.getElementById("greenClip");
const easySpeed = 500
const challengeSpeed = 300

//flash codes for challenge mode
const randomFlash = ["rgb(0, 177, 103)", "rgb(0, 175, 228)", "rgb(255, 230, 0)", "rgb(222, 0, 70)"]

//button flashes 
const flashRed = () =>{
  if (startButton.innerHTML === "END GAME" && Kai.difficultyLevel === "Easy"){
    red.style.backgroundColor = "rgb(222, 0, 70)";
    red.style.border = "8px solid antiquewhite"
    audioRed.play();
    setTimeout(clearFlash, easySpeed);
  } else if (Kai.difficultyLevel === "CHALLENGE"){
    randomFlashIndex = Math.floor(Math.random() * 4);
    red.style.backgroundColor = randomFlash[randomFlashIndex];
    red.style.border = "8px solid antiquewhite"
    audioRed.play();
    setTimeout(clearFlash, challengeSpeed)
  }
}

const flashYellow = () => {
  if (startButton.innerHTML === "END GAME" && Kai.difficultyLevel === "Easy"){
    yellow.style.backgroundColor = "rgb(255, 230, 0)";
    yellow.style.border = "8px solid antiquewhite";
    audioYellow.play()
    setTimeout(clearFlash, easySpeed);
  } else if (Kai.difficultyLevel === "CHALLENGE") {
    randomFlashIndex = Math.floor(Math.random() * 4);
    yellow.style.backgroundColor = randomFlash[randomFlashIndex];
    yellow.style.border = "8px solid antiquewhite"
    audioYellow.play();
    setTimeout(clearFlash, challengeSpeed)
  }
};

const flashBlue = () => {
  if (startButton.innerHTML === "END GAME" && Kai.difficultyLevel === "Easy"){
    blue.style.backgroundColor = "rgb(0, 175, 228)";
    blue.style.border = "8px solid antiquewhite";
    audioBlue.play()
    setTimeout(clearFlash, easySpeed);
  } else if (Kai.difficultyLevel === "CHALLENGE") {
    randomFlashIndex = Math.floor(Math.random() * 4);
    blue.style.backgroundColor = randomFlash[randomFlashIndex];
    blue.style.border = "8px solid antiquewhite"
    audioBlue.play();
    setTimeout(clearFlash, challengeSpeed)
  }
};

const flashGreen = () => {
  if (startButton.innerHTML === "END GAME" && Kai.difficultyLevel === "Easy") {
    green.style.backgroundColor = "rgb(0, 177, 103)";
    green.style.border = "8px solid antiquewhite";
    audioGreen.play();
    setTimeout(clearFlash, easySpeed);
  } else if (Kai.difficultyLevel === "CHALLENGE") {
    randomFlashIndex = Math.floor(Math.random() * 4);
    green.style.backgroundColor = randomFlash[randomFlashIndex];
    green.style.border = "8px solid antiquewhite"
    audioGreen.play();
    setTimeout(clearFlash, challengeSpeed)
  }
};

//event listeners for click to get player input
const redInput = red.addEventListener( "click", (e) => {
  if (Kai.gameOn && !Kai.gameOver) {
    Kai.playerInput.push("red");
    flashRed();

    if (Kai.difficultyLevel === "Easy"){
      setTimeout(checker, easySpeed);
    } else{
      setTimeout(checker, challengeSpeed);
    }
  }
})

const yellowInput = yellow.addEventListener("click", e => {
  if (Kai.gameOn && !Kai.gameOver) {
    Kai.playerInput.push("yellow");
    flashYellow();
    
    if (Kai.difficultyLevel === "Easy") {
      setTimeout(checker, easySpeed);
    } else {
      setTimeout(checker, challengeSpeed);
    }
  }
});

const blueInput = blue.addEventListener("click", e => {
  if (Kai.gameOn && !Kai.gameOver) {
    Kai.playerInput.push("blue");
    flashBlue();
    
    if (Kai.difficultyLevel === "Easy") {
      setTimeout(checker, easySpeed);
    } else {
      setTimeout(checker, challengeSpeed);
    }
  }
});

const greenInput = green.addEventListener("click", e => {
  if (Kai.gameOn && !Kai.gameOver) {
    Kai.playerInput.push("green");
    flashGreen()
    
    if (Kai.difficultyLevel === "Easy") {
      setTimeout(checker, easySpeed);
    } else {
      setTimeout(checker, challengeSpeed);
    }
  }
});

//generates the correct sequence for the whole 10 rounds to win 
const sequenceGenerator = () => {
  for (let i = 0; i < 10; i++) {
    randomIndex = Math.floor((Math.random() * 4))
    Kai.sequence.push(COLORS[randomIndex])
  }
  // return Kai
}
level = document.getElementById("level-counter");
const displayLevel = () =>{
  if(Kai.level !== "none"){
    level.innerHTML = `ROUND ${Kai.level}`
  }
}
// button starts, ends and says trying again when you lose 
startButton = document.getElementById("start");
startButton.addEventListener('click', function(e){
  if (startButton.innerHTML === "START"){
    resetGame();
    sequenceGenerator();
    clearFlash();
    ComputerTurn();
    displayLevel()
    startButton.innerHTML = "END GAME"
  } else if (startButton.innerHTML === "END GAME"){
    loseFlash();
    level.innerHTML = "";
    comments.innerHTML = "SHAME"
    startButton.innerHTML = "TRY AGAIN"
  } else if (startButton.innerHTML = "TRY AGAIN"){
    resetGame();
    sequenceGenerator();
    clearFlash();
    ComputerTurn();
    displayLevel()
    startButton.innerHTML = "END GAME";
  }
})


//computer turn disables player input 
const ComputerTurn = () => {
  currentCorrectSequence = Kai.sequence.slice(0, Kai.level)
  Kai.gameOn = false;
  if (Kai.difficultyLevel === "Easy"){
    for (let i = 0; i < currentCorrectSequence.length; i++) {
      switch (currentCorrectSequence[i]) {
        case "red":
          setTimeout(flashRed, i * (2 * easySpeed))
          break;
        case "green":
          setTimeout(flashGreen, i * (2 * easySpeed));
          break;
        case "yellow":
          setTimeout(flashYellow, i * (2 * easySpeed));
          break;
        case "blue":
          setTimeout(flashBlue, i * (2 * easySpeed));
          break;
        default:
          break;
      }
    }
    setTimeout(gameTrue, currentCorrectSequence.length * 2 * easySpeed)

  } else if (Kai.difficultyLevel === "CHALLENGE"){
    for (let i = 0; i < currentCorrectSequence.length; i++) {
      switch (currentCorrectSequence[i]) {
        case "red":
          setTimeout(flashRed, i * (2 * challengeSpeed))
          break;
        case "green":
          setTimeout(flashGreen, i * (2 * challengeSpeed));
          break;
        case "yellow":
          setTimeout(flashYellow, i * (2 * challengeSpeed));
          break;
        case "blue":
          setTimeout(flashBlue, i * (2 * challengeSpeed));
          break;
        default:
          break;
      }
    }
    setTimeout(gameTrue, currentCorrectSequence.length * 2 * challengeSpeed)

  }
}

const gameTrue = () => {
  Kai.gameOn = true;
}

//checker- checks playerInput verus the currentCorrectSequence
comments = document.getElementById("comments")
const checker = () =>{
  let currentCheck = Kai.playerInput.length -1
  if (Kai.playerInput[currentCheck] === currentCorrectSequence[currentCheck]){
    randomIndex = Math.floor(Math.random() * 8);
    comments.innerHTML = randomComments[randomIndex];
  } else {
    comments.innerHTML = "GAME OVER";
    startButton.innerHTML = "TRY AGAIN";
    loseFlash(); 
  }

  if (Kai.playerInput.length === currentCorrectSequence.length && Kai.playerInput.join() === currentCorrectSequence.join()){
    clearPlayerInput();
    Kai.level = Kai.level + 1;
    displayLevel()
    setTimeout(ComputerTurn, 800);
  }
  
  if (Kai.playerInput.length === 10 && Kai.playerInput.join() === currentCorrectSequence.join()){
    Kai.gameOver = true;
    winFlash();
    startButton.innerHTML = "START";
  }
}

const clearPlayerInput = () => {
  Kai.playerInput = []
}

const resetGame = () => {
  if (comments.innerHTML === "Challenge-Click the button that flashes"){
    Kai = {
      sequence: [],
      playerInput: [],
      gameOn: true,
      gameOver: false,
      difficultyLevel: "CHALLENGE",
      level: 1
    };
  } else {
    Kai = {
      sequence: [],
      playerInput: [],
      gameOn: true,
      gameOver: false,
      difficultyLevel: "Easy",
      level: 1
    };
    comments.innerHTML = ""
    superMode.style.display = "none";
  }
}

const loseFlash = () =>{
  red.style.backgroundColor = "black";
  yellow.style.backgroundColor = "black";
  blue.style.backgroundColor = "black";
  green.style.backgroundColor = "black";
  Kai.gameOver = true;
  Kai.gameOn = false;
  Kai.sequence = [];
  superMode.style.display = "block";
}

const winFlash = () => {
  flashRed();
  flashYellow();
  flashBlue();
  flashGreen()
  comments.innerHTML = "WINNER WINNER CHICKEN DINNER"
}

superMode = document.getElementById("super");
superMode.addEventListener('click', function (e) {
  if (!Kai.gameOn){
    comments.innerHTML = "Challenge-Click the button that flashes";
    superMode.style.display = "none";
    startButton.innerHTML = "START";
    clearFlash();
  }
})

