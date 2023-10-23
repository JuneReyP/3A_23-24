//     document.write("THis is JS!");
//     /*
//     /
//     /
//     /
//     */
// //    window.alert("This is an alert!");
// // console.log("This is my logs!");
// document.getElementById('sample').innerHTML = "My JS";

// function changeBG(){
//     document.getElementById('sample').style.backgroundColor = 'orange';
// }

var a = 2;
var b = 4;
var b = 10;

var c = a + b;

let d = 'text';
const e = 'lorem';
document.getElementById('sample').innerHTML = a + b;


/*
Types of JavaScript Operators

There are different types of JavaScript operators:

Arithmetic Operators
    Operator 	Description
        + 	        Addition
        - 	        Subtraction
        * 	        Multiplication
        ** 	        Exponentiation (ES2016)
        / 	        Division
        % 	        Modulus (Division Remainder)
        ++ 	        Increment
        -- 	        Decrement
Assignment Operators
    Operator 	Example 	Same As
        = 	        x = y 	    x = y
        += 	        x += y  	x = x + y
        -= 	        x -= y 	    x = x - y
        *= 	        x *= y 	    x = x * y
        /= 	        x /= y 	    x = x / y
        %= 	        x %= y 	    x = x % y
        **= 	    x **= y 	x = x ** y
Comparison Operators
    Operator 	Description
        == 	        equal to        (1 == '1')
        === 	    equal value and equal type (1 === '1')
        != 	        not equal   (1 != '1')
        !== 	    not equal value or not equal type   (1 !== '1')
        > 	        greater than
        < 	        less than
        >= 	        greater than or equal to
        <= 	        less than or equal to
        ? 	        ternary operator
Logical Operators
    Operator 	Description
        && 	        logical and
        || 	        logical or
        ! 	        logical not
Ternary Operators
    ?
    (condition) ? ifTrue : ifFalse;
alert(1 === '1')
*/

//without parameter
function addTwoNum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    // document.getElementById('displayAns').innerHTML = parseInt(num1) + parseInt(num2);
    myFuncWparam(num1, num2);
}

//with parameter
function myFuncWparam(num1, num2) {
    let answer = parseInt(num1) + parseInt(num2)
    document.getElementById('displayAns').innerHTML = answer;
    // console.log(answer);
}
// myFuncWparam(5, 3);

function greetMe() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let address = document.getElementById('address').value;

    combineText(fname, lname, address);

}

function combineText(firstName, lastName, address) {
    let greetMe = 'Hi , I am ' + firstName + ' ' + lastName + ' and I lived in ' + address;
    document.getElementById('displayAns').innerHTML = greetMe;
}

/**
 * Conditional statements
 * if
 * if else
 * if elseIf else
 * switch
 * for-loop
 * while-loop
 */

//if
// if(conditions){
//     //execute if condition returns true
// }
var a = 3;
// if(a !== '3'){
//     alert('Condition is true!')
// }
// if(a === '3'){
//     alert('Condition is true!')
// }else{
//     alert('Condition is False!')
// }
// if(a === '3'){
//     alert('First Condition is true!')
// }else if(a !== '3'){
//     alert('Second Condition is True!')
// }else if(a != '3'){
//     alert('Else Condition!')
// }else{
//     alert('All conditions are false!')
// }
let username = 'juan';
let password = 123;

function login() {
    let uname = document.getElementById('username').value;
    let pass = document.getElementById('pass').value;

    if (username === uname && password == pass) {
        alert("Login Successful!");
    } else {
        alert("Invalid Username or Password");
    }
}

// let grade = 91;
// if(grade < 90){
//     alert('Rating is B')
// }else if(grade <= 100){
//     alert('Rating is A')
// }else{
//     alert('Rating is C')
// }

/**
 * switch statement
 * 
 * switch(expression) {
        case x:
            // code block
            break;
        case y:
            // code block
            break;
        default:
            // code block
} 
 */
// var expr = 'sum';
var answer;
var num1 = 4;
var num2 = 3;

// switch(expr){
//     case "sum":
//         answer = num1 + num2;
//         alert(answer);
//         break;
//     case "subtract":
//         answer = num1 - num2;
//         alert(answer);
//         break;
//     case "multiply":
//         answer = num1 * num2;
//         alert(answer);
//         break;
//     case "divide":
//         answer = num1 / num2;
//         alert(answer);
//         break;
//     default:
//         alert("Please enter a valid operator.");
// }

// loops
// for-loop

//indexed-array
var cars = ["toyota", "honda", "BMW", "toyota", "honda", "BMW"];// 0 == toyota, 1 == honda, 2 == BMW
let person = ["Juan", 24, "Male", "CPSU"];

let myArr = [
    [
        ["toyota", "honda", "BMW"],
        ["toyota", "honda", "BMW"],
        ["toyota", "honda", "BMW"]
    ], //0
    [
        ["Juan", 24, "Male"],
        ["Juan", 24, "Male"],
        ["Juan", 24, "Male"]
    ], //1
    [
        ["banana", "grapes", "apple","banana", "grapes", "apple"],
        ["banana", "grapes", "apple"],
        ["banana", "grapes", "apple"],
        ["banana", "grapes", "apple"],
        ["banana", "grapes", "apple"]
    ] //2
];
//document.write(myArr[1][0]);

// document.write(cars[0] + ' ');
// document.write(cars[1] + ' ');
// document.write(cars[2] + ' ');

for(let row = 0; row < myArr.length; row++){
    //document.write(myArr[][][] + ' ');
    for(let col = 0; col < myArr[row].length; col++ ){
        for(let data = 0; data < myArr[row][col].length; data++){
            document.write(myArr[row][col][data] + ' ');
        }
        document.write('<br>');
    }
    document.write('<br>');
}

//myArr[0][0][] == toyota

//while loop
// alert(cars.length);
let i = 0;
while(i < cars.length){
    document.write(cars[i] + ' ');
    i++;
}