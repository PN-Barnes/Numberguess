let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// step 3
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
} 
//step 4
// MY CODE
const compareGuesses = (human, computer, secret) => {
  if (Math.abs(human - secret) < Math.abs(computer - secret)) {
    return true;
  } else if (Math.abs(computer - secret) < Math.abs(human - secret)) {
    return false;
  } else {
    return true;
  }
} 
//step 5
const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else if(winner === 'computer') {
    computerScore += 1;
  } else {
    return humanScore += 1
  }
}
// step 6
const advanceRound = () => {
  currentRoundNumber += 1;
  }
const alert = (human)=> {
  if(human < 0 && human > 9) {
    return 'Your number is out of range, Please enter a number between 0 and 10.'
  }
}


updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore);

