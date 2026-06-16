// -------------------------- For Loop --------------------------
//
// A for loop is used to repeat a block of code
// a specific number of times.
//
// Syntax:
// for (initialization; condition; increment/decrement) {
//     // code to execute
// }
//
// initialization -> runs once at the beginning
// condition      -> checked before each iteration
// increment      -> updates the loop variable
//

// Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// -------------------------- Increment by 2 --------------------------
//
// Increase the loop counter by 2 each time.
// This prints only odd numbers from 1 to 10.
//

for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}


// -------------------------- Break Statement --------------------------
//
// break immediately terminates the loop.
// The remaining iterations are not executed.
//

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        console.log("Loop terminated at 5 using break");
        break;
    }

    console.log(i);
}


// -------------------------- Continue Statement --------------------------
//
// continue skips the current iteration
// and moves to the next iteration.
//
// The loop itself continues running.
//

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        console.log("Number 5 skipped using continue");
        continue;
    }

    console.log(i);
}


// -------------------------- Break vs Continue --------------------------
//
// break    -> Stops the entire loop
// continue -> Skips the current iteration only