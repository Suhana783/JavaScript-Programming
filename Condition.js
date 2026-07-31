// Even Odd

let a = 10;

if (a % 2 == 0) {
    console.log("even")
} else{
    console.log("odd")
};


// Leap Year 

let year = 2018;

if (year % 400 == 0) {
    console.log("leap year")    
}

else if (year % 100 == 0) {
    console.log("not a leap year")
}

else if (year % 4 == 0) {
    console.log("leap year")
}

else {
    console.log("not a leap year")
}

