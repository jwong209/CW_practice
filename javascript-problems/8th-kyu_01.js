/* ---------------------------------------- Vowel remover ----------------------------------------
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

/* ---------------------------------------- Plural ----------------------------------------
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

/* ---------------------------------------- Sum Arrays ----------------------------------------
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
// console.log("sumArrays: " + sumArrays([1, 5.2, 4, 0, -1]));
// console.log("sumArrays: " + sumArrays([]));
// console.log("sumArrays: " + sumArrays([-2.398]));

/* ---------------------------------------- Function 2 - squaring an argument ----------------------------------------
Now you have to write a function that takes an argument and returns the square of it.
*/

// const square = (n) => n * n;

function square(arg) {
  return Math.pow(arg, 2);
}

/* ---------------------------------------- Reverse List Order ----------------------------------------
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]

*/
function reverseList(list) {
  return list.reverse();
}
// console.log(reverseList([1, 2, 3, 4]));
// console.log(reverseList([9, 2, 0, 7]));

/* ---------------------------------------- Keep up the hoop ----------------------------------------
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/
function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}
// console.log(hoopCount(10));
// console.log(hoopCount(9));

/* ---------------------------------------- Remove exclamation marks ----------------------------------------
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/
function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}
// console.log(removeExclamationMarks("Hello!"));

/* ---------------------------------------- Reversed Strings ----------------------------------------
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/
function reverseString(str) {
  return str.split("").reverse().join("");
}
// console.log(reverseString("world"));
// console.log(reverseString("word"));

/* ---------------------------------------- Will there be enough space ----------------------------------------
The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/
function enoughSpace(cap, on, wait) {
  // if (on + wait < cap){
  // return 0;
  // } else {
  // return (on + wait) - cap;

  return Math.max(wait + on - cap, 0);
}
// console.log(enoughSpace(10, 5, 5));
// console.log(enoughSpace(100, 60, 50));

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
  const arr = numbers.split(" ");
  let high = -Infinity;
  let low = Infinity;

  for (let num of arr) {
    if (parseInt(num) > high) {
      high = num;
    }
    if (parseInt(num) < low) {
      low = num;
    }
  }
  return high + " " + low;

  // numbers = numbers.split(" ");
  // return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
// console.log(highAndLow("1 2 3 4 5"));
// console.log(highAndLow("1 2 -3 4 5"));
// console.log(highAndLow("1 2 3 4 -5"));

/* ---------------------------------------- Find numbers which are divisible by given number ----------------------------------------
  Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

  Example(Input1, Input2 --> Output)
  [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/
function divisibleBy(numbers, divisor) {
  let arr = [];
  for (let el of numbers) {
    if (el % divisor === 0) arr.push(el);
  }
  return arr;

  // return numbers.filter(n => n % divisor === 0)
}
// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

/* ---------------------------------------- Basic Mathematical Operations ----------------------------------------
  Your task is to create a function that does four basic mathematical operations.

  The function should take three arguments - operation(string/char), value1(number), value2(number).
  The function should return result of numbers after applying the chosen operation.

  Examples(Operator, value1, value2) --> output
  ('+', 4, 7) --> 11
  ('-', 15, 18) --> -3
  ('*', 5, 5) --> 25
  ('/', 49, 7) --> 7
*/
function basicOp(operation, value1, value2) {
  if (operation === '+') {
    return value1 + value2;
  }
  if (operation === '-') {
    return value1 - value2;
  }
  if (operation === '*') {
    return value1 * value2;
  }
  if (operation === '/') {
    return value1 / value2;
  }
  return 0;

  // switch (operation) {
  //   case '+':
  //       return value1 + value2;
  //   case '-':
  //       return value1 - value2;
  //   case '*':
  //       return value1 * value2;
  //   case '/':
  //       return value1 / value2;
  //   default:
  //       return 0;
}
// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 15, 8));
// console.log(basicOp('*', 5, 5));
// console.log(basicOp('/', 49, 7));

/* ---------------------------------------- Volume of a Cuboid ----------------------------------------
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
*/
function getVolumeOfCuboid(length, width, height) {
  return length * width * height;
}
// console.log(getVolumeOfCuboid(1, 2, 3));

/* ---------------------------------------- Convert a Number to a String! ----------------------------------------
    We need a function that can transform a number (integer) into a string.

    What ways of achieving this do you know?

    Examples (input --> output):
    123  --> "123"
    999  --> "999"
    -100 --> "-100"
*/
function numberToString(num) {
  return num.toString();
}

/* ---------------------------------------- Sentence Smash ----------------------------------------
    Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

    Example
    ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
    words = ['hello', 'world', 'this', 'is', 'great']
    smash(words) # returns "hello world this is great"

    Assumptions
    You can assume that you are only given words.
    You cannot assume the size of the array.
    You can assume that you do get an array.
*/
const smash = words => words.join(' ');
// console.log(smash(['hello', 'world', 'this', 'is', 'great']));

/* ---------------------------------------- Count Odd Numbers below n ----------------------------------------
  Given a number n, return the number of positive odd numbers below n, EASY!

  Examples (Input -> Output)
  7  -> 3 (because odd numbers below 7 are [1, 3, 5])
  15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
*/
const oddCount = n => Math.floor(n / 2);
// function oddCount(n){
//   let arr = [];
//   let i = 1;
//   while (i < n) {
//     arr.push(i);
//     i+= 2;
//   }
//   return arr.length;
// }
// console.log(oddCount(7));
// console.log(oddCount(15));

/* ---------------------------------------- Calculate average ----------------------------------------
  Write a function which calculates the average of the numbers in a given array.

  Note: Empty arrays should return 0.
*/
const findAverage = array => {
  if (array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
// console.log("findAverage: " + findAverage([1, 1, 1]));
// console.log("findAverage: " + findAverage([1, 2, 3]));
// console.log("findAverage: " + findAverage([1, 2, 3, 4]));

/* ---------------------------------------- Find the position! ----------------------------------------
    When provided with a letter, return its position in the alphabet.

    Input :: "a"

    Output :: "Position of alphabet: 1"

    Note: Only lowercased English letters are tested
*/
function position(letter){
  let alphabet = ['zero trolls', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return `Position of alphabet: ${alphabet.indexOf(letter)}`;

  // const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}
// console.log(position('c'));
// console.log(position('z'));

/* ---------------------------------------- Twice as old ----------------------------------------
    Your function takes two arguments:

    current father's age (years)
    current age of his son (years)
    Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
// console.log(50, 20);

/* ---------------------------------------- Remove First and Last Character ----------------------------------------
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
*/
function removeChar(str){
  return str.substring(1, str.length - 1)
 };

/* ---------------------------------------- Remove First and Last Character Part Two ----------------------------------------
You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/
function array(string) {
  const strArr = string.split(',');
  let ans = string = strArr.slice(1, strArr.length - 1).join(' ');
  if (ans === '') return null;
  return ans;
}

/* ---------------------------------------- Filter out the geese ----------------------------------------
Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(item => !geese.includes(item));
}
// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));

/* ---------------------------------------- Name Shuffler ----------------------------------------
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/
function nameShuffler(str){
  return str.split(' ').reverse().join(" ");
}

/* ---------------------------------------- Is it a palindrome? ----------------------------------------
Write a function that checks if a given string (case insensitive) is a palindrome.
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
*/
function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
}

/* ---------------------------------------- Capitalization and Mutability ----------------------------------------
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

The string will always start with a letter and will never be empty.

Examples:
"hello" --> "Hello"
"Hello" --> "Hello" (the first letter was already capitalized)
"a"     --> "A"
*/
function capitalizeWord(word) {
  const cap = word.charAt(0).toUpperCase() + word.slice(1);
  return cap;
}

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

/* ---------------------------------------- nnn ----------------------------------------

*/
