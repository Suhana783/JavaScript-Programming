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
// Median of two sorted array

let nums1 = [1, 3];
let nums2 = [2];

nums1 = nums1.concat(nums2);
let n = nums1.length;

// bubble sort
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (nums1[j] > nums1[j + 1]) {
      [nums1[j], nums1[j + 1]] = [nums1[j + 1], nums1[j]];
    }
  }
}

let mid = parseInt(n / 2);
let median;

if (n % 2 !== 0) {
  median = nums1[mid];
} else {
  median = (nums1[mid - 1] + nums1[mid]) / 2;
}

console.log(median);
