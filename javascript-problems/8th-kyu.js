/* ---------- Vowel remover ----------
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/
function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}
// console.log("shortcut: " + shortcut("hello"));
// console.log("shortcut: " + shortcut("codewars"));
// console.log("shortcut: " + shortcut("goodbye"));
// console.log("shortcut: " + shortcut("HELLO"));

/* ---------- Plural ----------
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.
*/
function plural(n) {
  return n !== 1;
}
console.log("plural: " + plural(5));
console.log("plural: " + plural(14));
console.log("plural: " + plural(1));

/* ---------- nnn ----------

*/

/* ---------- nnn ----------

*/

/* ---------- nnn ----------

*/

/* ---------- nnn ----------

*/

/* ---------- nnn ----------

*/

/* ---------- nnn ----------

*/
