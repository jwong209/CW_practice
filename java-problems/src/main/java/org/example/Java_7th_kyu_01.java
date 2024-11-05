package org.example;

import java.util.*;

public class Java_7th_kyu_01 {
    public static void main(String[] args) {

//        System.out.println("binaryAddition: " + binaryAddition(1, 1));
//        System.out.println("binaryAddition: " + binaryAddition(5, 9));

//        System.out.println("getMiddle: " + getMiddle("test"));
//        System.out.println("getMiddle: " + getMiddle("testing"));
//        System.out.println("getMiddle: " + getMiddle("middle"));
//        System.out.println("getMiddle: " + getMiddle("A"));

//        System.out.println("highAndLow: " + highAndLow("1 2 3 4 5"));
//        System.out.println("highAndLow: " + highAndLow("1 2 -3 4 5"));
//        System.out.println("highAndLow: " + highAndLow("1 9 3 4 -5"));

//        System.out.println("strEndsWith: " + strEndsWith("abc", "bc"));
//        System.out.println("strEndsWith: " + strEndsWith("abc", "d"));

        System.out.println("isogram: " + isIsogram("Dermatoglyphics"));
        System.out.println("isogram: " + isIsogram("aba"));
        System.out.println("isogram: " + isIsogram("moOse"));

        System.out.println("");

        System.out.println("");

    }

    /* -------------------- Binary Addition --------------------
    Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

    The binary number returned should be a string.

    Examples:(Input1, Input2 --> Output (explanation)))

    1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
    5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
     */
    public static String binaryAddition(int a, int b) {
        return Integer.toBinaryString(a + b);
    }

    /* -------------------- Highest and Lowest --------------------
    You are given a string of space separated numbers, and have to return the highest and lowest number.

    Examples
    highAndLow("1 2 3 4 5"); // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
    Notes
    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.
     */

    /* -------------------- Get the Middle Character --------------------
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
    public static String getMiddle(String word) {
        int middle = word.length() / 2;
        if (word.length() % 2 != 0) {
            return word.substring(middle, middle + 1);
        } else {
            return word.substring(middle - 1, middle + 1);
        }
    }

    /* -------------------- Highest and Lowest --------------------
    In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

    Examples
    highAndLow("1 2 3 4 5") // return "5 1"
    highAndLow("1 2 -3 4 5") // return "5 -3"
    highAndLow("1 9 3 4 -5") // return "9 -5"
    Notes
    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.
     */
    public static String highAndLow(String numbers) {
//        String[] str = numbers.split(" ");
//        int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
//        for(String s: str) {
//            int x = Integer.parseInt(s);
//            if(x < min) min = x;
//            if(x > max) max = x;
//        }
//        return max + " " + min;

        String[] nums = numbers.split(" ");
        int highest = Integer.MIN_VALUE;
        int lowest = Integer.MAX_VALUE;

        for (String num : nums) {
            int number = Integer.parseInt(num);
            if (number < lowest) {
                lowest = number;
            }
            if (number > highest) {
                highest = number;
            }
        }
        return highest + " " + lowest;
    }

    /* -------------------- String ends with? --------------------
   Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

   Examples:

   solution('abc', 'bc') // returns true
   solution('abc', 'd') // returns false
    */
    public static boolean strEndsWith(String str, String ending) {
        return str.endsWith(ending);
    }

    /* -------------------- Isograms --------------------
    An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

    Example: (Input --> Output)

    "Dermatoglyphics" --> true
    "aba" --> false
    "moOse" --> false (ignore letter case)
     */
    public static boolean isIsogram(String str) {
        String lowerCaseStr = str.toLowerCase();
        HashSet<Character> charSet = new HashSet<>();
        for (char c : lowerCaseStr.toCharArray()) {
            if (!charSet.add(c)) {
                return false;
            }
        }
        return true;
    }

    /* -------------------- Count the divisors of a number --------------------
    Count the number of divisors of a positive integer n.

    Random tests go up to n = 500000, but fixed tests go higher.

    Examples (input --> output)
    4 --> 3 // we have 3 divisors - 1, 2 and 4
    5 --> 2 // we have 2 divisors - 1 and 5
    12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
    30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
    Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
     */
    public static long numberOfDivisors(int n) {
        if (n == 1) return 1;
        long count = 2;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                count += (i * i == n) ? 1 : 2;
            }
        }
        return count;
    }

    /* -------------------- Find the stray number --------------------
    You are given an odd-length array of integers, in which all of them are the same, except for one single number.

    Complete the method which accepts such an array, and returns that single different number.

    The input array will always be valid! (odd-length >= 3)

    Examples
    [1, 1, 2] ==> 2
    [17, 17, 3, 17, 17, 17, 17] ==> 3
     */
    public static int stray(int[] numbers) {
        Arrays.sort(numbers);
        return numbers[0] != numbers[1] ? numbers[0] : numbers[numbers.length - 1];
    }

    /* -------------------- Factorial --------------------
    Your task is to write function factorial.
    https://en.wikipedia.org/wiki/Factorial
     */
    public static long factorial(int n) {
        long product = 1;
        for (int i = 1; i <= n; i++) {
            product *= i;
        }
        return product;
    }

    /* -------------------- nnn --------------------

     */

    /* -------------------- nnn --------------------

     */

}
