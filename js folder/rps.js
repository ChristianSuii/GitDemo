
function playGame(playerMove) {
  const compMove = pickCompMove();
  
    let result = '';

    if (playerMove === 'scissors') {
      if (compMove === 'rock') {
        result = 'You lose.';
      } else if (compMove === 'paper') {
        result = 'You win.'
      } else if (compMove === 'scissors') {
        result = 'Tie.'
      }

    } else if (playerMove === 'paper') {
      if (compMove === 'rock') {
        result = 'You win.';
      } else if (compMove === 'paper') {
        result = 'Tie.'
      } else if (compMove === 'scissors') {
        result = 'You lose.'
      }
      
    } else if (playerMove === 'rock') {
      if (compMove === 'rock') {
        result = 'Tie.';
      } else if (compMove === 'paper') {
        result = 'You lose.'
      } else if (compMove === 'scissors') {
        result = 'You win.'
      }
    }
    
    alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result}`)
}

function pickCompMove() {
  const randNum = Math.random();

  let compMove = '';

  if (randNum >= 0 && randNum < 1/3) {
    compMove = 'rock';
  } else if (randNum >= 1/3 && randNum < 2/3) {
    compMove = 'paper';
  } else if (randNum >= 2/3 && randNum < 1) {
    compMove = 'scissors';
  }

  return compMove;
} 







