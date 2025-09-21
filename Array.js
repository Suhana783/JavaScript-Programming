// let arr = [1,4,-5,8,3,-1,7]
// function kadanAlgo (arr) {

//     let max = -Infinity;
//     let sum = 0;
//     let n = arr.length;

//     for(let i=0; i < n; i++) {
//         sum += arr[i];

//         if (sum > max) {
//         max = sum;   
// }

//     }
//     return max;
// }

// console.log(kadanAlgo(arr));


// 1.Create a new array that contains only the even numbers.

// const numbers = [4, 7, 2, 9, 5, 1, 8];

// const evens = numbers.filter(num => num % 2 === 0);

// console.log(evens); 


// 2.Create another new array where each number is doubled.
const numbers = [4, 7, 2, 9, 5, 1, 8];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
