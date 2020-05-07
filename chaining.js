// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Then output (either in the DOM or the console) the sum of all the resulting numbers.
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


// Sort the numbers in descending order (10, 9, 8, 7, etc).
integers.sort((next, current) => current - next);

// Remove any integers greater than 19.
const intsUpTo19 = integers.filter(integer => integer < 20);

// Multiply each remaining number by 1.5 and then subtract 1.
const multiplyAndSubtract = intsUpTo19.map(integer => integer * 1.5 - 1);
console.log(multiplyAndSubtract);