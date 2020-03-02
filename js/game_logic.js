const COLORS = ["red","green", "blue", "yellow"]

let Kai = {
  sequence: [],
  gameOver: false,
  level: 1,
  mode: "normal"
}

const sequenceGenerator = () => {
  randomIndex = Math.floor((Math.random() * 4))
  Kai.sequence.push(COLORS[randomIndex])
  // return Kai
}

const colorRelay = () => {
  for (let i = 0; i < Kai.sequence.length; i++) {
    button = document.getElementsByClassName(`${Kai.sequence[i]}`);
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
    level: 1,
    mode: "normal"
  };
}

// const play = ()









// const sequenceChecker = (input) => {

// }