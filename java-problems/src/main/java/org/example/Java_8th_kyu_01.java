package org.example;

import java.util.ArrayList;
import java.util.List;

public class Java_8th_kyu_01 {
    public static void main(String[] args) {
//        System.out.println("Vowel remover: " + shortcut("hello"));
//        System.out.println("Vowel remover: " + shortcut("codewars"));
//        System.out.println("Vowel remover: " + shortcut("goodbye"));
//        System.out.println("Vowel remover: " + shortcut("HELLO"));

//        System.out.println("plural: " + isPlural(5));
//        System.out.println("plural: " + isPlural(14));
//        System.out.println("plural: " + isPlural(1));

//        System.out.println("sumArray: " + sumArray(new double[]{1, 5.2, 4, 0, -1}));  // Expected output: 9.2
//        System.out.println("sumArray: " + sumArray(new double[]{}));                  // Expected output: 0.0
//        System.out.println("sumArray: " + sumArray(new double[]{-2.398}));           // Expected output: -2.398

//        System.out.println("square: " + square(2));
//        System.out.println("square: " + square(1));
//        System.out.println("square: " + square(9));

//        System.out.println("hoopCount: " + hoopCount(10));
//        System.out.println("hoopCount: " + hoopCount(9));

//        System.out.println("removeExclamationMarks: " + removeExclamationMarks("Hello!"));

//        System.out.println("reverseString: " + reverseString("world"));
//        System.out.println("reverseString: " + reverseString("word"));

//        System.out.println("enoughSpace: " + enoughSpace(10, 5, 5));
//        System.out.println("enoughSpace: " + enoughSpace(100, 60, 50));

//        System.out.println("divisibleBy: " + Arrays.toString(divisibleBy(new int[]{1, 2, 3, 4, 5, 6},2)));

//        System.out.println("basicMath: " + basicMath("+", 4, 7));
//        System.out.println("basicMath: " + basicMath("-", 15, 18));
//        System.out.println("basicMath: " + basicMath("*", 5, 5));
//        System.out.println("basicMath: " + basicMath("/", 49, 7));

//        System.out.println("sentenceSmash: " + sentenceSmash(new String[]{"hello", "world", "this", "is", "great"}));

//        System.out.println("oddCount: " + oddCount(7));
//        System.out.println("oddCount: " + oddCount(15));

//        System.out.println("findAverage: " + find_average(new int[]{1, 3, 5}));
//        System.out.println("findAverage: " + find_average(new int[]{1, 3, 5, 7, 9, 11, 13}));

//        System.out.println(position('a'));
//        System.out.println(position('h'));
//        System.out.println(position('z'));

//        System.out.println("twiceAsOld: " + twiceAsOld(50, 20));

    }

    /* --------------- Vowel remover ---------------
    Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

    Examples
    "hello"     -->  "hll"
    "codewars"  -->  "cdwrs"
    "goodbye"   -->  "gdby"
    "HELLO"     -->  "HELLO"
    don't worry about uppercase vowels
    y is not considered a vowel for this kata
     */
    public static String shortcut(String input) {
        return input.replaceAll("[aeiou]", "");
    }

    /* --------------- Plural ---------------
    We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

    You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

    All values will be positive integers or floats, or zero.
     */
    public static boolean isPlural(float f) {
        return f != 1.0;
    }

    /* --------------- Sum Arrays ---------------
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
    Tests expect accuracy of 1e-4.
     */
    public static double sumArray(double[] arr) {
        double sum = 0;
        for (double num : arr) {
            sum += num;
        }
        return sum;
    }

    /* --------------- Function 2 - squaring an argument ---------------
    Now you have to write a function that takes an argument and returns the square of it.
     */
    public static int square(int n) {
        return n * n;
    }

    /* --------------- Keep up the hoop ---------------
    Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

    Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

    If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
    If he doesn't get 10 hoops, return the string "Keep at it until you get it".
     */
    public static String hoopCount(int n) {
        return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
    }

    /* --------------- Remove exclamation marks ---------------
    Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
     */
    public static String removeExclamationMarks(String s) {
        return s.replace("!", "");
    }

    /* --------------- Reversed Strings ---------------
    Complete the solution so that it reverses the string passed into it.

    'world'  =>  'dlrow'
    'word'   =>  'drow'
     */
    public static String reverseString(String str) {
        return new StringBuilder(str).reverse().toString();
    }

    /* --------------- Will there be enough space? ---------------
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
    public static int enoughSpace(int cap, int on, int wait) {
//        if ((on + wait) <= cap) {
//            return 0;
//        } else {
//            return (on + wait) - cap;
//        }

        return Math.max(0, wait + on - cap);
    }

    /* --------------- Find numbers which are divisible by given number ---------------
    Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

    Example(Input1, Input2 --> Output)
    [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
     */
    public static int[] divisibleBy(int[] numbers, int divider) {
        List<Integer> answer = new ArrayList<>();

        for (int num : numbers) {
            if (num % divider == 0) {
                answer.add((int) num);
            }
        }
        int[] result = new int[answer.size()];
        for (int i = 0; i < answer.size(); i++) {
            result[i] = answer.get(i);
        }
        return result;

//        return Arrays.stream(numbers).filter(n -> n % divider == 0).toArray();
    }

    /* --------------- Basic Mathematical Operations ---------------
    Your task is to create a function that does four basic mathematical operations.

    The function should take three arguments - operation(string/char), value1(number), value2(number).
    The function should return result of numbers after applying the chosen operation.

    Examples(Operator, value1, value2) --> output
    ('+', 4, 7) --> 11
    ('-', 15, 18) --> -3
    ('*', 5, 5) --> 25
    ('/', 49, 7) --> 7
     */
    public static Integer basicMath(String op, int v1, int v2) {
        if (op.equals("+")) {
            return v1 + v2;
        }
        if (op.equals("-")) {
            return v1 - v2;
        }
        if (op.equals("*")) {
            return v1 * v2;
        }
        if (op.equals("/")) {
            return v1 / v2;
        }
        return 0;
    }

    /* --------------- Volume of a Cuboid ---------------
    Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
     */
    public static double getVolumeOfCuboid(final double length, final double width, final double height) {
        return length * width * height;
    }

    /* --------------- Convert a Number to a String! ---------------
    We need a function that can transform a number (integer) into a string.

    What ways of achieving this do you know?

    Examples (input --> output):
    123  --> "123"
    999  --> "999"
    -100 --> "-100"
     */
    public static String numberToString(int num) {
        return String.valueOf(num);
    }
    
    /* --------------- Sentence Smash ---------------
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
    public static String sentenceSmash(String... words) {
        if (words.length <= 0) {
            return "";
        }
        String answer = "";
        for (int i = 0; i < words.length; i++) {
            answer += words[i];

            if (i < words.length - 1) {
                answer += " ";
            }
        }
        return answer;

//        return String.join(" ", words);
    }

    /* --------------- Count Odd Numbers below n ---------------
    Given a number n, return the number of positive odd numbers below n, EASY!

    Examples (Input -> Output)
    7  -> 3 (because odd numbers below 7 are [1, 3, 5])
    15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
     */
    public static int oddCount(int n){
        return n/2;
    }

    /* -------------------- Calculate average --------------------
    Write a function which calculates the average of the numbers in a given array.

    Note: Empty arrays should return 0.
     */
    public static double find_average(int[] array) {
        int sum = 0;
        for (int num : array) {
            sum += num;
        }
        return (double) sum / array.length;

//        return Arrays.stream(array).average().orElse(0);
    }

    /* -------------------- Find the position! --------------------
    When provided with a letter, return its position in the alphabet.

    Input :: "a"

    Output :: "Position of alphabet: 1"

    Note: Only lowercased English letters are tested
     */
    public static String position(char alphabet)
    {
        return "Position of alphabet: " + ((int) alphabet - 96);
    }

    /* -------------------- Twice as old --------------------
    Your function takes two arguments:

    current father's age (years)
    current age of his son (years)
    Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
     */
    public static int twiceAsOld(int dadYears, int sonYears){
        return Math.abs(dadYears - 2 * sonYears);
    }

    /* -------------------- Quarter of the year --------------------
    Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
    For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

    Constraint:
    1 <= month <= 12
     */
    public static int quarterOf(int month) {
        if (month <= 3) {
            return 1;
        } else if (month <= 6) {
            return 2;
        } else if (month <= 9) {
            return 3;
        }
        return 4;
    }

    /* -------------------- Area or Perimeter --------------------
    You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
    If it is a square, return its area. If it is a rectangle, return its perimeter.

    Example(Input1, Input2 --> Output):
    6, 10 --> 32
    3, 3 --> 9
    Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
     */
    public static int areaOrPerimeter (int l, int w) {
        if (l == w) return l * w;
        return (2 * l) + (2 * w);
    }

    /* -------------------- Determine offspring sex based on genes XX and XY chromosomes --------------------
    The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

    The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

    Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

    If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
     */
    public static String chromosomeCheck(String sperm) {
        return sperm.equals("XX") ? "Congratulations! You're going to have a daughter." : "Congratulations! You're going to have a son.";
    }

    /* -------------------- nnn --------------------

     */

    /* -------------------- nnn --------------------

     */

}
