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

/* ---------------------------------------- Isograms ----------------------------------------
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/
function isIsogram(str){
  const lowerCaseStr = str.toLowerCase();
  const charSet = new Set(lowerCaseStr);
  return lowerCaseStr.length === charSet.size;
}
// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("aba"));
// console.log(isIsogram("moOse"));

/* ---------------------------------------- Count the divisors of a number ----------------------------------------
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000, but fixed tests go higher.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/
function getDivisorsCnt(n) {
  let count = 0
  if (n % Math.sqrt(n) == 0) {
    count++;
  }
  for (let i = 0; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      count += 2;
    }
  }
  return count;
}

/* ---------------------------------------- Find the stray number ----------------------------------------
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/
function stray(numbers) {
  let arr = numbers.sort();
  if (arr[0] !== arr[1]) {
    return arr[0];
  }
  return arr[arr.length - 1];
}

/* ---------------------------------------- Factorial ----------------------------------------
Your task is to write function factorial.
https://en.wikipedia.org/wiki/Factorial
*/
function factorial(n){
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}

/* ---------------------------------------- Summing a number's digits ----------------------------------------
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
For example: (Input --> Output)
10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/
function sumDigits(number) {
  let strNum = Math.abs(number).toString().split('');
  let sum = 0;
  for (let el of strNum) {
    sum += parseInt(el);
  }
  return sum;
}
// console.log("sumDigits: " + sumDigits(10)); // >>> 1
// console.log("sumDigits: " + sumDigits(99)); // >>> 18
// console.log("sumDigits: " + sumDigits(-32)); // >>> 5
// console.log("sumDigits: " + sumDigits(-32)); // >>> 5
// console.log("sumDigits: " + sumDigits(0)); // >>> 0

/* ---------------------------------------- Sum of two lowest positive integers ----------------------------------------
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}
// console.log("sumTwoSmallestNumbers: " +  sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // >>> 13
// console.log("sumTwoSmallestNumbers: " +  sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // >>> 10
// console.log("sumTwoSmallestNumbers: " +  sumTwoSmallestNumbers([52, 76, 14, 12, 4])); // >>> 16

/* ---------------------------------------- Simple Fun #176: Reverse Letter ----------------------------------------
Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".
For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/
function reverseLetter(str) {
  let reversedStr = str.split('').reverse().join('');
  return reversedStr.replace(/[^a-z]/g, '');
}

/* ---------------------------------------- nnn ----------------------------------------

*/

/* ---------------------------------------- nnn ----------------------------------------

*/

/* ---------------------------------------- nnn ----------------------------------------

*/
