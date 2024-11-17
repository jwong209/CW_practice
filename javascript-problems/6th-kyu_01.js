/* ---------------------------------------- Who likes it? ----------------------------------------
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/
function likes(names) {
    if (names.length === 0) {
      return 'no one likes this'
    } else if (names.length === 1) {
      return names[0] + " likes this";
    } else if (names.length === 2) {
      return names[0] + " and " + names[1] + " like this";
    } else if (names.length === 3) {
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
      return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
     }
  }
console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

/* ---------------------------------------- Counting Duplicates ----------------------------------------
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
function duplicateCount(text){
  const obj = {};
  let count = 0;
  for (let i of text) {
    i = i.toLowerCase();
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }
  for (let i in obj) {
    if (obj[i] > 1) {
      count++;
    }
  }
  return count;
}
// console.log(duplicateCount("abcde")); // >>> 0
// console.log(duplicateCount("ABBA")); // >>> 2

/* ---------------------------------------- Count characters in your string ----------------------------------------
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
function count(string) {
  if (string.length === 0) {
      return {};
  }

  let obj = new Object();

  for (let i = 0; i < string.length; i++) {
     if (obj[string[i]] === undefined) {
          obj[string[i]] = 1;
     } else {
          obj[string[i]] += 1;
     }
  }
  return obj;
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
