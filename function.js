// Scopes 
// function abc() {
//     let x = 10;
//     var y = 20;
//     const z = 30;

//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// abc();

// console.log(x); // Error
// console.log(y); // Error
// console.log(z); // Error

// let name = "Suhana";

// function outer() {
//     let age = 21;

//     function inner() {
//         console.log(name);
//         console.log(age);
//     }

//     inner();
// }

// outer();


// Arrow Function 

// const greet = () => {
//     console.log("Hello")
// }

// greet();

// multiple parameters
// const multiply = (a,b,c) => {
//     return a*b*c
// }
// console.log(multiply(2,5,4))

// implicit return 
// const add = (a,b) => a+b
// console.log(add(2,3))

// const result = add(20,30)
// console.log(result)

// Multi-line arrow function 

// const add = (a,b) => {
//     let result = a+b
//     console.log("calculating ...")
//     console.log(result)
// }

// add(20,70)

// this keyword 

// const person = {
//     name: "Suhana",

//     greet: function () {
//         console.log(this.name);
//     }
// };

// person.greet();




// const person = {
//     name: "Suhana",

//     sayName: function () {
//         const show = () => {
//             console.log(this.name);
//         };

//         show();
//     }
// };

// person.sayName();


