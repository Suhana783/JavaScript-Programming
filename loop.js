
// Print numbers from 1 to 20 using a for loop.

// let x = 20
// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }

// Print numbers from 20 to 1 using a while loop.

// let x = 1
// let i = 20

// while (i >= x) {
//     console.log(i)
//     i--
// }

// Print all even numbers between 1 and 50.

// let n = 50
// for(let i = 2; i < 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }


// Print all odd numbers between 1 and 30 using continue.

let n = 30
let i = 1

while (i <= 30) {
    if (i % 2 == 0) {
        i++
        continue
    }
    console.log(i)
    i++
}