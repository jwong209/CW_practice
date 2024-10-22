/* -------------------- Vowel remover --------------------
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/
function vowelRemover(string) {
  return string.replace(/[aeiou]/g, "");
}
// console.log("vowelRemover: " + vowelRemover("hello"));
// console.log("vowelRemover: " + vowelRemover("codewars"));
// console.log("vowelRemover: " + vowelRemover("goodbye"));
// console.log("vowelRemover: " + vowelRemover("HELLO"));

/* -------------------- Plural --------------------
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.
*/
function plural(n) {
  return n !== 1;
}
// console.log("plural: " + plural(5));
// console.log("plural: " + plural(14));
// console.log("plural: " + plural(1));

/* -------------------- Sum Arrays --------------------
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
*/
function sumArrays(numbers) {
  // let sum = 0;
  // for (let el of numbers) {
  //     sum += el;
  // }
  // return sum;

  return numbers.reduce((a, b) => a + b, 0);
}
console.log("sumArrays: " + sumArrays([1, 5.2, 4, 0, -1]));
console.log("sumArrays: " + sumArrays([]));
console.log("sumArrays: " + sumArrays([-2.398]));

/* -------------------- nnn --------------------

*/

/* -------------------- nnn --------------------

*/

/* -------------------- nnn --------------------

*/

/* -------------------- nnn --------------------

*/

/* -------------------- nnn --------------------

*/
