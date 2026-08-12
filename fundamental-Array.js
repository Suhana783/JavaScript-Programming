// Array 

// let fruits = ["apple", "banana", "guava"]
// console.log(typeof(fruits))

// console.log([] == 1)

// let a = [1,2,3,4,5]
// let b = new Array (4,5,6)
// console.log(b)

// literals and constructor 
// let m = [10]
// let p = new Array(10,4,5)

// console.log(p.length)
// console.log(m.length)



// Nested Array 
// let numbers = [
//     [10,20,30],
//     [90,7,8,6],
//     [3,4,2,4,5,6,9]
// ]

// console.log(numbers[1][0])

// Updating array elements 

// let fruits = ["apple", "banana", "mango", "orange"]
// fruits [3] = "cherry"
// fruits = ["mango"]
// console.log(fruits)


// Array methods 

// The push() method is used to add one or more elements to the end of an array.

// let arr = [2,3,4,5,6,7]
// arr.push(4,7,8)
// console.log(arr)

// console.log(arr.pop())
// console.log(arr)

// The shift() method is used to remove the first element from an array.

// let fruits = ["apple","banana", "litchi"]
// fruits.shift()
// console.log(fruits)


// The slice() method is used to extract a portion of an array and return it as a 
// new array without modifying the original array.

// let arr = [3,4,2,3,5,6,7,9]
// let result = arr.slice(2,5)
// console.log(result)

// The splice() method is used to add, remove, or replace elements in an array.
// It modifies the original array.


// 1. Remove elements 

// let arr = [5,3,8,9,2,3]

// // start from index 0 remove 5 elements including index 0 
// arr.splice(0,3) 
// console.log (arr)

// 2. Add elements 

// let nums = [2,3,1,4,5,3]
// let names = ["arnav", "prashant","preeti","pari"]

// nums.splice(6,0, "maya", "aakriti") 
// names.splice(0,0,45,70)
// console.log(nums)
// console.log(names)

// 3. Replace elements 

// let nums = [23,12,35,65,64]
// nums.splice(3,0,100,200)
// console.log(nums)


// - The includes() method is used to check whether a specific
//   value exists in an array. It returns true or false.

// let fruits = ["apple", "mango", "water melon", "litchi"]

// console.log(fruits.includes("cherry"))

// The indexOf() method is used to find the index (position)
//  of a specific element in an array.

// let arr = [23,22,45,67,54,99]

// console.log(arr.indexOf(54))

