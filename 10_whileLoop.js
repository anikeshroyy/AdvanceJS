// -------------------------- While Loop --------------------------
//
// A while loop executes as long as the condition is true.
//
// Syntax:
// while (condition) {
//     // code to execute
// }
//
// Use a while loop when you don't know exactly
// how many times the loop should run.
//

let count = 1;

// Print numbers from 1 to 5
while (count <= 5) {
    console.log(count);
    count++;
}


// -------------------------- While Loop Example --------------------------
//
// Print even numbers from 2 to 10
//

let even = 2;

while (even <= 10) {
    console.log(even);
    even += 2;
}


// -------------------------- Do While Loop --------------------------
//
// A do...while loop executes the code block
// at least once before checking the condition.
//
// Syntax:
// do {
//     // code to execute
// } while (condition);
//
// The condition is checked after execution.
//

let num = 1;

// Print numbers from 1 to 5
do {
    console.log(num);
    num++;
} while (num <= 5);


// -------------------------- Do While Example --------------------------
//
// The code runs once even though
// the condition is false.
//

let value = 10;

do {
    console.log("This runs once");
} while (value < 5);


// -------------------------- While vs Do While --------------------------
//
// while:
// 1. Condition checked first
// 2. May run zero times
//
// do...while:
// 1. Code executes first
// 2. Runs at least one time
//

// while example
let x = 10;

while (x < 5) {
    console.log("While Loop");
}

// Output: Nothing


// do...while example
let y = 10;

do {
    console.log("Do While Loop");
} while (y < 5);

// Output:
// Do While Loop