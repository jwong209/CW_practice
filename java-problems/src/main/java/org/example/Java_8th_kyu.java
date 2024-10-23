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

        System.out.println("");

        System.out.println("");
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

    /* --------------- nnn ---------------

     */



}
