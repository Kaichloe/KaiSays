const COLORS = ["red","green", "blue", "yellow"]

const randomComments = ["ok", "I see you", "Not bad", "You smart", "big money", "OK", "OK I SEE YOU", "You loyal",
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
  red.style.backgroundColor = "red";
  yellow.style.backgroundColor = "yellow";
  blue.style.backgroundColor = "blue";
  green.style.backgroundColor = "green";
}

//button flashes 
const flashRed = () =>{
  red.style.backgroundColor = "darkred";
  setTimeout(clearFlash, 500);
}

const flashYellow = () => {
  yellow.style.backgroundColor = "darkgoldenrod";
  setTimeout(clearFlash, 500);
};

const flashBlue = () => {
  blue.style.backgroundColor = "darkblue";
  setTimeout(clearFlash, 500);
};

const flashGreen = () => {
  green.style.backgroundColor = "darkgreen";
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
 
// button starts, ends and says trying again when you lose 
startButton = document.getElementById("start");
startButton.addEventListener('click', function(e){
  if (startButton.innerHTML === "Start"){
    resetGame();
    sequenceGenerator();
    clearFlash();
    ComputerTurn();
    startButton.innerHTML = "End Game"
  } else if (startButton.innerHTML === "End Game"){
    loseFlash();
    comments.innerHTML = "SHAME"
    startButton.innerHTML = "Start"
  } else {
    resetGame();
    sequenceGenerator();
    clearFlash();
    ComputerTurn();
    startButton.innerHTML = "End Game"
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
    randomIndex = Math.floor(Math.random() * 7);
    comments.innerHTML = randomComments[randomIndex];
  } else {
    comments.innerHTML = "GAME OVER";
    startButton.innerHTML = "Try Again";
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
  comments.innerHTML = ""
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
    flashRed()
  }
}


