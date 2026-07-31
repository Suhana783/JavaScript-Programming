let name = "Meena"

let English = 38;
let Science = 49;
let Hindi = 68;
let SocialScience = 78;
let Maths = 80;

let total = English + Science + Hindi + SocialScience + Maths

let percentage = (total / 500) * 100
console.log(percentage)

let grade;
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "F";
}

let result;

if (percentage >= 40) {
    result = "PASS";
} else {
    result = "FAIL";
}

console.log("grade :", grade)
console.log("result :", result)
