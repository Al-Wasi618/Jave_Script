// Problem 1: take an integer (last digit of your ID) as input and print the next integer of it.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("", (n) => {
  n = parseInt(n);
  n++;
  console.log(n); 
  rl.close();
});