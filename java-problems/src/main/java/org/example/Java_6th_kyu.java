package org.example;

import java.util.Arrays;

public class Java_6th_kyu {
    public static void main(String[] args) {
//        System.out.println("whoLikesIt: " + whoLikesIt(new String[]{}));
//        System.out.println("whoLikesIt: " + whoLikesIt(new String[]{"Peter"}));
//        System.out.println("whoLikesIt: " + whoLikesIt(new String[]{"Jacob", "Alex"}));
//        System.out.println("whoLikesIt: " + whoLikesIt(new String[]{"Max", "John", "Mark"}));
//        System.out.println("whoLikesIt: " + whoLikesIt(new String[]{"Alex", "Jacob", "Mark", "Max"}));

        System.out.println("");

        System.out.println("");

        System.out.println("");

    }

    /* -------------------- Who likes it? --------------------
    You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

    Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

    []                                -->  "no one likes this"
    ["Peter"]                         -->  "Peter likes this"
    ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
    ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
    ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
    Note: For 4 or more names, the number in "and 2 others" simply increases.
     */
    public static String whoLikesIt(String...names){
        int length = names.length;
        if (length == 0)
            return "no one likes this";
        else if (length == 1)
            return names[0] + " likes this";
        else if (length == 2)
            return names[0] + " and " + names[1] + " like this";
        else if (length == 3)
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        else
            return names[0] + ", " + names[1] + " and " + (length - 2) + " others like this";
    }

    /* -------------------- nnn --------------------

     */

    /* -------------------- nnn --------------------

     */
}
