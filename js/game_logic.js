const COLORS = ["red","green", "blue", "yellow"]

let Kai = {
  sequence: [],
  playerInput: [],
  gameOver: false,
  defaultLevel: "Ash",
  level: 1
}

  startButton = document.getElementById("start");
  startButton.addEventListener('click', function(e){
    // console.log("START")
  })

const sequenceGenerator = () => {
  randomIndex = Math.floor((Math.random() * 4))
  Kai.sequence.push(COLORS[randomIndex])
  // return Kai
}

const colorRelay = () => {
  for (let i = 0; i < Kai.sequence.length; i++) {
    button = document.getElementById(`${Kai.sequence[i]}`);
    button.classList.add("active")
  }
}

// const gameOver = () => {
//   if (Kai.gameOver){
    
//   }
// }

const resetGame = () => {
  Kai = {
    sequence: [],
    gameOver: false,
    defaultLevel: "Ash",
    level: 1
  };
}
