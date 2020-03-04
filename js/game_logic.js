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

//event listeners for click to get player input
const redInput = red.addEventListener( "click", (e) => {
  if (Kai.gameOn){
    Kai.playerInput.push("red")
    red.style.backgroundColor = "darkred";
    setTimeout(clearFlash, 1000);
  }
})

const yellowInput = yellow.addEventListener("click", e => {
  if (Kai.gameOn) {
    Kai.playerInput.push("yellow");
    yellow.style.backgroundColor = "darkgoldenrod";
    setTimeout(clearFlash, 1000);
  }
});

const blueInput = blue.addEventListener("click", e => {
  if (Kai.gameOn) {
    Kai.playerInput.push("blue");
    blue.style.backgroundColor = "darkblue";
    setTimeout(clearFlash, 1000);
  }
});

const greenInput = green.addEventListener("click", e => {
  if (Kai.gameOn) {
    Kai.playerInput.push("green");
    green.style.backgroundColor = "darkgreen";
    setTimeout(clearFlash, 1000);
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

startButton = document.getElementById("start");
startButton.addEventListener('click', function(e){
  resetGame()
  sequenceGenerator()
  clearFlash()
  if (startButton.innerHTML === "Start"){
    startButton.innerHTML = "Restart"
  } else{
    startButton.innerHTML = "Start"
  }

})

// const play = () => {
  
// }

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
