'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums (arr: any): boolean {
  return (arr.includes(4) && arr.includes(8) && arr.includes(12) && arr.includes(16));
}

console.log(checkNums(listOfNumbers));

export = checkNums;