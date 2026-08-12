// Array Destructuring 

// let fruits = ["apple", "mango", "banana", "papaya"]
// let [first, second,,third] = fruits;
// console.log(first,second,third)


// Object Destructuring 
// let student = {
//     name : "Maya",
//     age : 21,
//     course : "BCA"
// }

// let {name, course} = student
// console.log(name, course)
// let {name: user} = student;  
// console.log(user)


// Nested Destructuring 

// nested objects 
// let student = {
//     name : "Suhana",
//     age: 21,
//     address: {
//         city: "Delhi",
//         pin : 110044
//     }
// }

// let {name, 
//     address :
//     {city, pin}
// } = student

// console.log(name)
// console.log(city)
// console.log(pin)


// nested array 
// let data = [10,80, [20, 30]];

// let [a, ,[b, c]] = data;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30


// optional chaining 
// let user = {}
// console.log(user.address?.city)

// let employee = {
//     name: "Harshad",
//     age: 30,
//     address : {
//         city : "Kolkata",
//         pin: 110044
//     }
// }

// console.log(employee.address.city)
// console.log(employee.address?.state)


// Nullish Coalescing 

// let name;
// console.log(name ?? "Guest")

// let name = "Payal"
// console.log(name ?? "Maya")

// let name = ""
// console.log(name || "Haya") prints truthy value
// console.log(name ?? "Haya") 

// Logic Practice
// Merge Arrays

// let arr1 = [2,3,45]
// let arr2 = [...arr1,34,56,7]
// console.log(arr2)

// Clone Objects
// let student = {
//     name: "Maya",
//     age: 21,
//     address : {
//         city : "Delhi",
//         pin : 110044
//     }
// }

// let data = { ...student}
// console.log(data)

// Sum using Rest Parameters

// let sum = 0
// function add (...arr) {
//     for (let i=0; i < arr.length; i++ ) {
//         sum += arr[i]
//     }
// return sum
// }

// console.log(add(2,3,4,5,6))

// Student Report using Destructuring

// let student = {
//     name : "Hania",
//     age: 21,
//     course : "BCA",
//     marks : {
//         english : 52,
//         "web-development": 60,
//         DSA : 70
//     }
// }

// let {name: studentName} = student;
// let {marks : 
//     {
//         english, 
//         "web-development" : webDevelopment, 
//         DSA
//     }
// } = student;

// console.log(studentName)
// console.log(english,webDevelopment,DSA)


// Shopping Cart using Spread

// let User = {
//   name : "Sakshi",
//   age: 22,
//   address: {
//     city: "Delhi",
//     pin: 110044
//   }
// }


// let shoppingCart = {
//    item : "Crop-top",
//    quantity: 1,
//    price: 299,
//    order: {
//     placed: "20-08-2026",
//     orderBy: "23-08-2026"
//    }
// }

// let cart  = {...User, ...shoppingCart, finalCost: 400}

// console.log(cart)

// rest operator in objects 

// let student = {
//     name: "Suhana",
//     age: 22,
//     course: "BCA",
//     city: "Delhi"
// };

// let { name, ...details } = student;

// console.log(name);
// console.log(details);