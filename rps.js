
// Load score from localStorage, or set default
let score =  JSON.parse(localStorage.getItem("rps-score")) || {
  wins: 0,
  losses: 0,
  draws: 0
};

updateScoreBoard();

function playGame(playerMove){
  const computerMove = getComputerMove();
  let result = '';

  if (playerMove === 'Rock'){
      if (computerMove === 'Rock') { result = 'Draw'; score.draws++; }
      else if (computerMove === 'Paper') { result = 'You Lose.'; score.losses++; }
      else if (computerMove === 'Scissors') { result = 'You Win.'; score.wins++; }
  }

  else if (playerMove === 'Paper') {
      if(computerMove === 'Rock') { result = 'You Win.'; score.wins++; }
      else if(computerMove === 'Paper') { result = 'Draw'; score.draws++; }
      else if(computerMove === 'Scissors') { result = 'You Lose.'; score.losses++; }
  }

  else if (playerMove === 'Scissors') {
      if (computerMove === 'Rock') { result = 'You Lose.'; score.losses++; }
      else if (computerMove === 'Paper') { result = 'You Win.'; score.wins++; }
      else if (computerMove === 'Scissors') { result = 'Draw'; score.draws++; }
  }
  // Save updated score in localStorage

  localStorage.setItem("rps-score", JSON.stringify(score));

  // Show result with images
  document.getElementById("result").innerHTML = `
    <p>You chose: <img src="${playerMove.toLowerCase()}-emoji.png" height="40"></p>
    <p>Computer chose: <img src="${computerMove.toLowerCase()}-emoji.png" height="40"></p>
    <p>${result}</p>
  `;

  // Update scoreboard
  updateScoreBoard();
}

function getComputerMove(){
  let randomMove = Math.random();
  let computerMove = '';

  if(randomMove < 1/3 ){ computerMove = 'Rock'; }
  else if (randomMove < 2/3){ computerMove = 'Paper'; }
  else { computerMove = 'Scissors'; }

  return computerMove;
}


function updateScoreBoard(){
  document.getElementById("score").innerHTML = 
    `Wins: ${score.wins} | Losses: ${score.losses} | Draws: ${score.draws}`;
}

