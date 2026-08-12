// 1. Function Declaration 
// greet () ;

// function greet () {
//     console.log("Hello")
// }


// 2. Function Expression 
// const greeting = function greet () {
//     console.log("Hi")
// };
// greeting () ;



// 3. Arrow Function 
// const greet = () => {
//     console.log("Hello Suhana")
// };
// greet();


// 1.Global Scope 
//  var name = "Suhana"
//  call();
//  function call () {
//     console.log(name)
//  }


//  2.Function Scope 
// const fScope = () => {
//     var name = "Suman"
//     console.log(name)
// }
//  fScope();


// 3.Block Scope 

// if (true) {
//     let blockVar = "inside a box";
//     console.log(blockVar)
// }



// Hoisting
// 1. Function Declarations are hoisted

// sayHello () ;

// function sayHello () {
//     console.log("Hello,how are you ?")
// }

// 2.Variables with var are hoisted but set to undefined 

// console.log(x); 
// var x = 10;

// 3. let and const are hoisted but not initialized (in "temporal dead zone") 

// console.log(y);
// let y = 20;


// 1. Type Coercion
//   When JavaScript automatically converts a value from one type to another behind the scenes (implicit conversion).


// String + Number → String
// console.log("5" + 2);   

// Number - String → Number
// console.log("5" - 2);  

// // Number * String → Number
// console.log("10" * "2");  

// // Boolean with Numbers
// console.log(1 + true);   
// console.log(1 + false);  

// // Null and Undefined
// console.log(Number(null));      
// console.log(Number(undefined)); 


// 1.Create a new array that contains only the even numbers.

// const numbers = [4, 7, 2, 9, 5, 1, 8];

// const evens = numbers.filter(num => num % 2 === 0);

// console.log(evens); 


// 2.Create another new array where each number is doubled.
// const numbers = [4, 7, 2, 9, 5, 1, 8];

// const doubled = numbers.map(num => num * 2);

// console.log(doubled);


// Default Parameters 
// function greet(name="Hayat") {
//     console.log(`Hello ${name}`)
// }

// greet("payal")


// Rest Operator (collects values into an array)

// function multiply (...numbers) {
//     return numbers.map(num => num * 2)
// }

// console.log(multiply(2,3,4,5,6,7))

// spread operator (spreads an array into individual values)
// 1. Array

// let arr1 = [1,4,5,6]
// let arr2 = [...arr1,56,78,9]
// console.log(arr2)

// 2. Copy an Array

// let arr1 = [10, 20, 30];
// let arr2 = [...arr1];
// console.log(arr2);

// 3. Objects 

