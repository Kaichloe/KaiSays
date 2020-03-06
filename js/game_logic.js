const COLORS = ["red","green", "blue", "yellow"]

const randomComments = ["ok", "I see you", "Not bad", "You smart", "BIG MONEY", "OK", "OK I SEE YOU", 
"Keys to success"]

let Kai = {
  sequence: [],
  playerInput: [],
  gameOn: false,
  gameOver: false,
  defaultLevel: "Ash",
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

//button flashes 
const flashRed = () =>{
  red.style.backgroundColor = "rgb(222, 0, 70)";
  red.style.border = "8px solid antiquewhite"
  setTimeout(clearFlash, 500);
}

const flashYellow = () => {
  yellow.style.backgroundColor = "rgb(255, 230, 0)";
  yellow.style.border = "8px solid antiquewhite";
  setTimeout(clearFlash, 500);
};

const flashBlue = () => {
  blue.style.backgroundColor = " rgb(0, 175, 228)";
  blue.style.border = "8px solid antiquewhite";
  setTimeout(clearFlash, 500);
};

const flashGreen = () => {
  green.style.backgroundColor = "rgb(0, 177, 103)";
  green.style.border = "8px solid antiquewhite";
  setTimeout(clearFlash, 500);
};

//event listeners for click to get player input
const redInput = red.addEventListener( "click", (e) => {
  if (Kai.gameOn && !Kai.gameOver) {
    Kai.playerInput.push("red");
    flashRed();
    
setTimeout(checker, 500);
  }
})

const yellowInput = yellow.addEventListener("click", e => {
  if (Kai.gameOn && !Kai.gameOver) {
    Kai.playerInput.push("yellow");
    flashYellow();
    setTimeout(checker, 500);
  }
});

const blueInput = blue.addEventListener("click", e => {
  if (Kai.gameOn && !Kai.gameOver) {
    Kai.playerInput.push("blue");
    flashBlue();
    setTimeout(checker, 500);
  }
});

const greenInput = green.addEventListener("click", e => {
  if (Kai.gameOn && !Kai.gameOver) {
    Kai.playerInput.push("green");
    flashGreen()
    setTimeout(checker, 500)
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
  level.innerHTML = `ROUND ${Kai.level}`
}
// button starts, ends and says trying again when you lose 
startButton = document.getElementById("start");
startButton.addEventListener('click', function(e){
  if (startButton.innerHTML === "Start"){
    resetGame();
    sequenceGenerator();
    clearFlash();
    ComputerTurn();
    displayLevel()
    startButton.innerHTML = "END GAME"
  } else if (startButton.innerHTML === "END GAME"){
    clearFlash()
    Kai.gameOver = true;
    comments.innerHTML = "SHAME"
    startButton.innerHTML = "START"
  } else {
    resetGame();
    sequenceGenerator();
    clearFlash();
    ComputerTurn();
    displayLevel()
    startButton.innerHTML = "END GAME"
  }
})

//computer turn disables player input 
const ComputerTurn = () => {
  currentCorrectSequence = Kai.sequence.slice(0, Kai.level)
  Kai.gameOn = false;
  for (let i = 0; i < currentCorrectSequence.length; i++) {
    switch (currentCorrectSequence[i]) {
      case "red":
        setTimeout(flashRed, i * 1000)
        break;
      case "green":
        setTimeout(flashGreen, i * 1000);
        break;
      case "yellow":
        setTimeout(flashYellow, i * 1000);
        break;
      case "blue":
        setTimeout(flashBlue, i * 1000);
        break;
      default:
        break;
    }
  }
  setTimeout(gameTrue, currentCorrectSequence.length * 1000)
}

const gameTrue = () => {
  Kai.gameOn = true;
}

// tester for flashes
// levelup = document.getElementById("test")
// levelup.addEventListener('click', function(e){
//   Kai.level = Kai.level + 1
//   setTimeout(ComputerTurn, 1000)
// })

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
  
  if (Kai.playerInput.length === 3){
    winFlash();
    Kai.gameOver = true;
    startButton.innerHTML = "Start";
  }

  if (Kai.playerInput.length === currentCorrectSequence.length){
    clearPlayerInput();
    Kai.level = Kai.level + 1;
    displayLevel()
    setTimeout(ComputerTurn, 1000);
  }
}

const clearPlayerInput = () => {
  Kai.playerInput = []
}

const resetGame = () => {
  Kai = {
    sequence: [],
    playerInput: [],
    gameOn: true,
    gameOver: false,
    defaultLevel: "Ash",
    level: 1
  };
  comments.innerHTML = "Kai Says"
}

const loseFlash = () =>{
  red.style.backgroundColor = "black";
  yellow.style.backgroundColor = "black";
  blue.style.backgroundColor = "black";
  green.style.backgroundColor = "black";
  Kai.gameOver = true;
}

const winFlash = () => {
  while (Kai.gameOver){
    flashRed();
    flashYellow();
    flashBlue();
    flashGreen()
    comments.innerHTML = "WINNER WINNER CHICKEN DINNER"
  }
}


