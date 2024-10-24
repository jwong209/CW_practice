package org.example;

public class Java_7th_kyu {
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

        System.out.println("");

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
    public static String binaryAddition(int a, int b){
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

    /* -------------------- nnn --------------------

     */

}
