package org.example;

import java.util.Arrays;

public class Java_8th_kyu {
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
    public static boolean isPlural(float f){
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
    public static int square(int n){
        return n*n;
    }

    /* --------------- Keep up the hoop ---------------
    Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

    Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

    If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
    If he doesn't get 10 hoops, return the string "Keep at it until you get it".
     */
    public static String hoopCount(int n){
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
    public static int enoughSpace(int cap, int on, int wait){
//        if ((on + wait) <= cap) {
//            return 0;
//        } else {
//            return (on + wait) - cap;
//        }

        return Math.max(0, wait + on - cap);
    }
}
