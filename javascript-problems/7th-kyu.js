/* ---------------------------------------- Binary Addition ----------------------------------------
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/
function addBinary(a, b) {
  let sum = a + b;
  return sum.toString(2);
}
// console.log("addBinary: " + addBinary(1, 1));
// console.log("addBinary: " + addBinary(5, 9));

// const addBinary = (a, b) => (a + b).toString(2);

/* ---------------------------------------- Reverse words ----------------------------------------
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

/* ---------------------------------------- Get the Middle Character
 ----------------------------------------
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/
function getMiddle(s) {
    if (s.length % 2 === 0) {
      return s.charAt(s.length / 2 - 1).concat("", s.charAt(s.length / 2));
    } else {
      return s.charAt(s.length / 2);
    }
  }
  console.log(getMiddle("test"));
  console.log(getMiddle("testing"));
  console.log(getMiddle("middle"));
  console.log(getMiddle("A"));

/* ---------------------------------------- nnn ----------------------------------------

*/

/* ---------------------------------------- nnn ----------------------------------------

*/
