const COLORS = ["red","green", "blue", "yellow"]

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
  if (Kai.gameOn){
    Kai.playerInput.push("red")
    flashRed()
  }
})

const yellowInput = yellow.addEventListener("click", e => {
  if (Kai.gameOn) {
    Kai.playerInput.push("yellow");
    flashYellow()
  }
});

const blueInput = blue.addEventListener("click", e => {
  if (Kai.gameOn) {
    Kai.playerInput.push("blue");
    flashBlue()
  }
});

const greenInput = green.addEventListener("click", e => {
  if (Kai.gameOn) {
    Kai.playerInput.push("green");
    flashGreen()
  }
});

//generates the correct sequence for the whole 15 rounds to win 
const sequenceGenerator = () => {
  for (let i = 0; i < 15; i++) {
    randomIndex = Math.floor((Math.random() * 4))
    Kai.sequence.push(COLORS[randomIndex])
  }
  // return Kai
}

const checker = () => {
  
}

startButton = document.getElementById("start");
startButton.addEventListener('click', function(e){
  resetGame()
  sequenceGenerator()
  clearFlash()
  ComputerTurn()
  if (startButton.innerHTML === "Start"){
    startButton.innerHTML = "Restart"
  } else{
    startButton.innerHTML = "Start"
  }

})

const ComputerTurn = () => {
  currentCorrectSequence = Kai.sequence.slice(0, Kai.level)
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
}

//tester for flashes
levelup = document.getElementById("test")
levelup.addEventListener('click', function(e){
  Kai.level = Kai.level + 1
  ComputerTurn()
})



const GameColorRelay = () => {
  for (let i = 0; i < Kai.sequence.length; i++) {
    button = document.getElementById(`${Kai.sequence[i]}`);
    button.classList.add("active")
  }
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
}

const loseFlash = () =>{
  red.style.backgroundColor = "black";
  yellow.style.backgroundColor = "black";
  blue.style.backgroundColor = "black";
  green.style.backgroundColor = "black";
}

