// Objects 
// An object in JavaScript is a collection of key-value 
// pairs used to store related data in a single variable.



// let student = {
//     name : "Maya",
//     age : 21,
//     course : "MERN"
// }

// console.log(student)

// Dot Notation 
// Dot notation is used to access or update the value of an object's property using the dot (.) operator.

// student.name = "Payal";
// console.log(delete student.age)
// console.log(student)

// Bracket Notation
// Bracket notation is used to access or update object properties using square brackets [].

// console.log(student["name"])

// Dynamic Property 
// let key = "name";

// let student = {
//     name: "Suhana",
//     age: 22,
//     "phone-number": 2252545434
// };

// console.log(student["phone-number"]);


// nested objects 

// let data = {
//     name: "Maya",
//     address : {
//         city : "Delhi",
//         pin : 110044
//     }
// };

// data.id = 123;

// console.log(data)


// Level 1 – Basics
// Create an object named student with properties:
// name
// age
// course
// Print the value of the course property.
// Update the age to 25.
// Add a new property city with value "Delhi".
// Delete the course property.

// let student = {
//     name: "Payal",
//     age: 20,
//     course: "MERN"
// };

// student.age = 25;
// student.city = "Delhi";
// delete student.course
// console.log(student)


// Level 2 – Dot vs Bracket Notation
// Create an object with the property "phone-number" and print its value.
// Create an object with the property "first name" and print it.
// Store "age" in a variable and access the age using that variable.

// Level 2 – Dot vs Bracket Notation
// Create an object with the property "phone-number" and print its value.
// Create an object with the property "first name" and print it.
// Store "age" in a variable and access the age using that variable.

// let mid = "age";

// let student = {
//     name: "Palak",
//     age: 45,
//     "phone-number": 3248797239,
//     "first name" : "Kumari"
// }

// console.log(student["phone-number"])
// console.log(student["first name"])
// console.log(student[mid])


// Level 3 – Nested Objects
// Create the following object and print only "Mumbai".

// let employee = {
//     name: "Aman",
//     address: {
//         city: "Mumbai",
//         pin: 400001
//     }
// };

// employee.address.pin = 400005;
// employee["address"]["pin"] =  400005;

// access city using Brackets
// console.log(employee["address"]["city"])
// console.log(employee)

// Level 4 – Object Methods
// Find all the keys using Object.keys().
// Find all the values using Object.values().
// Find all key-value pairs using Object.entries().

// console.log(Object.keys(employee))
// console.log(Object.values(employee))
// console.log(Object.entries(employee))

// console.log(Object.keys(employee["address"]))


// Level 5 – Checking Properties
// Check whether the object has an email property using the in operator.
// Check whether the object has a name property using hasOwnProperty().

// let employee = {
//     name: "Aman",
//     address: {
//         city: "Mumbai",
//         pin: 400001
//     }
// };


// console.log("email" in employee);
// console.log(employee.hasOwnProperty("name"))

// Level 6 – Looping
// Print only all the keys using for...in.
// Print only all the values using for...in.
// Print both keys and values in this format:

// for (let key in employee) {
//     console.log(Object.keys(employee))
// }


