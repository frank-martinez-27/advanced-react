/* eslint-disable no-unused-vars */

// Open the console on your browser and type [closure exercise] in the console filter.
// You should see on the console the console.log() for this exercise.

function add(num) {
  return function (num2){
    return num2 + num
  }
}

const addTen = add(10);
console.log(addTen);
let result;
result = addTen(7); // should output 12

console.log(`[closure exercise] addTen(7) is ${result}`);
