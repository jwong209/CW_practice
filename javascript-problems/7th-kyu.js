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

/* ---------------------------------------- Get the Middle Character ----------------------------------------
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
// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));
// console.log(getMiddle("A"));

/* ---------------------------------------- Highest and Lowest ----------------------------------------
    In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

    Examples
    highAndLow("1 2 3 4 5"); // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
    Notes
    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.
*/
function highAndLow(numbers) {
  // const arr = numbers.split(" ")
  //   let high = -Infinity;
  //   let low = Infinity;

  //   for(let num of arr) {
  //       if(parseInt(num) > high) {
  //           high = num;
  //       }
  //       if(parseInt(num) < low) {
  //           low = num;
  //       }
  //   }
  //   return high + " " + low;

  const arr = numbers.split(" ");
  let high = arr[0];
  let low = arr[0];

  for (let num of arr) {
    if (parseInt(num) > high) {
      high = num;
    }
    if (parseInt(num) < low) {
      low = num;
    }
  }
  return high + " " + low;

  // numbers = numbers.split(' ');
  // return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
// console.log(highAndLow("1 2 3 4 5"));
// console.log(highAndLow("1 2 -3 4 5"));
// console.log(highAndLow("1 9 3 4 -5"));

/* ---------------------------------------- String ends with? ----------------------------------------
    Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

    Examples:

    solution('abc', 'bc') // returns true
    solution('abc', 'd') // returns false
*/
function strEndsWith(str, ending) {
  return str.endsWith(ending);
}

// const solution = (str, ending) => str.endsWith(ending);
// console.log(solution('abc', 'bc'));
// console.log(solution('abc', 'd'));

/* ---------------------------------------- nnn ----------------------------------------

*/

/* ---------------------------------------- nnn ----------------------------------------

*/

/* ---------------------------------------- nnn ----------------------------------------

*/

/* ---------------------------------------- nnn ----------------------------------------

*/

/* ---------------------------------------- nnn ----------------------------------------

*/
