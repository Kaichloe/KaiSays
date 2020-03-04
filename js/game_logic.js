const COLORS = ["red","green", "blue", "yellow"]

let Kai = {
  sequence: [],
  playerInput: [],
  gameOn: true,
  gameOver: false,
  defaultLevel: "Ash",
  level: 1
}

// grabbing all the html elements
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const green = document.getElementById("green");

//event listeners for click to get player input
const redInput = red.addEventListener( "click", (e) => {
  if (Kai.gameOn){
    Kai.playerInput.push("red")
  }
})

const yellowInput = yellow.addEventListener("click", e => {
  if (Kai.gameOn) {
    Kai.playerInput.push("yellow");
  }
});

const blueInput = blue.addEventListener("click", e => {
  if (Kai.gameOn) {
    Kai.playerInput.push("blue");
  }
});

const greenInput = green.addEventListener("click", e => {
  if (Kai.gameOn) {
    Kai.playerInput.push("green");
  }
});

//generates the sequence for this round
const sequenceGenerator = () => {
  for (let i = 0; i < 15; i++) {
    randomIndex = Math.floor((Math.random() * 4))
    Kai.sequence.push(COLORS[randomIndex])
  }
  // return Kai
}

startButton = document.getElementById("start");
startButton.addEventListener('click', function(e){
  console.log("START")
})

const play = () => {
  
}
const colorRelay = () => {
  for (let i = 0; i < Kai.sequence.length; i++) {
    button = document.getElementById(`${Kai.sequence[i]}`);
    button.classList.add("active")
  }
}

const checker = () => {
  
}

const resetGame = () => {
  Kai = {
    sequence: [],
    gameOver: false,
    defaultLevel: "Ash",
    level: 1
  };
}
