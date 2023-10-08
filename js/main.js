// Conditionals: Ternary Operator

/*Syntax
condition ? ifTrue : ifFalse;
the colon is like else an IF Else statement
when learn how to use them, save a lot of lines of code!
*/

console.log("Rock, Paper, Scissors with Ternary Logic");

const options = ["rock", "paper", "scissors"];
let optionA = options[Math.floor(Math.random() * options.length)];
let optionB = options[Math.floor(Math.random() * options.length)];
let player = optionA;
let computer = optionB;

let result = player === computer ? `It's a tie: ${player} & ${computer}!`
: player === "rock" && computer === "paper" ? `Computer wins: ${player} vs. ${computer}!`
: player === "paper" && computer === "scissors" ? `Computer wins: ${player} vs. ${computer}!`
: player === "scissors" && computer === "rock" ? `Computer wins: ${player} vs. ${computer}!`
: `Player wins: ${player} vs. ${computer}!`;
console.log(result);