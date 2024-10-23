/* -------------------- Training JS #1: create your first JS function and print "Hello World!" --------------------
In JavaScript, your code is running in a function, let us step by step complete your first JS function.

Look at this example:

      --------keyword "function"
      |       ----your function name
      |       |    ---if needed, some arguments will appear in parentheses
      |       |    |
    function myfunc(){  ---------your function code will starting with "{"
      //you should type your code here
    }----------------------------ending with "}"
If we want to print some to the screen, maybe we can use Document.write() in the web, or use alert() pop your message, but Codewars did not support these methods, we should use console.log() in your function. see this example:

function printWordToScreen(){
  var somewords="This is an example."
  console.log(somewords)
}
If we run this function, This is an example. will be seen on the screen. As you see, console.log() is an useful method. You will use it a lot!

Task
Please refer to two example above and write your first JS function.

mission 1:

use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

mission 2:

use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

mission 3:

type the console.log() in the next line (don't forget to put the str in the parentheses).
*/
helloWorld = function () {
  var str = "Hello World!";
  console.log(str);
};
helloWorld();

/* -------------------- Training JS #2: Basic data types--Number --------------------
In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

Numbers can use operators such as + - * / %

Task
I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
*/
let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,
      b = v1;
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a = v4 , //set number value to a
      b = v2 ; //set number value to b
  return a - b;
}

function equal3(){
  let a = v1  , //set number value to a
      b = v5 ; //set number value to b
  return a * b;
}

function equal4(){
  let a = v4  , //set number value to a
      b = v5 ; //set number value to b
  return a / b;
}

function equal5(){
  let a = v6 , //set number value to a
      b = v3 ; //set number value to b
  return a % b;
}

/* -------------------- Training JS #3: Basic data types--String --------------------

*/
