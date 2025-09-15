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
console.log("5" + 2);   

// Number - String → Number
console.log("5" - 2);  

// Number * String → Number
console.log("10" * "2");  

// Boolean with Numbers
console.log(1 + true);   
console.log(1 + false);  

// Null and Undefined
console.log(Number(null));      
console.log(Number(undefined)); 
