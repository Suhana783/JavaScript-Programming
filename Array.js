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


// selection_sort 

// function selection_sort(arr) {
//     let n = arr.length
//     for(let i = 0; i < n-1; i++){

//         let min_index = i
//         for (let j=i+1; j < n; j++){
           
//             if (arr[j] < arr[min_index]) {
//                 min_index = j
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[min_index];
//         arr[min_index] = temp;
//     }
//     return arr;
// }
// let arr = [3,2,5,8,1,4,9];
// console.log(selection_sort(arr));


// insertion_sort 

// function insertion_sort (arr) {

//     for (let i=1; i<arr.length; i++) {
//         let key = arr[i]
//         j = i-1
//         while (j >= 0 && arr[j] > key){
//             arr[j + 1] = arr[j];
//             j--
//         }
//         arr[j+1] = key
//     }
//     return arr
// }

// arr = [3,2,5,8,1,4,9];
// console.log(insertion_sort(arr))


// Problem:
// You are given an array of numbers:
// let arr = [12, 7, 9, 20, 5, 15];
// Sort the array in ascending order using insertion sort.
// After sorting, insert a new number 10 into the correct position in the sorted array without sorting the whole array again.
// Print the final array.

