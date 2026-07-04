// Example 1 : Basic Closure

function x() {

    // Local variable of x()
    var a = 14;

    // Inner function
    function y() {

        // y() can access variable 'a'
        // because of Lexical Scope
        console.log(a);

    }

    // Returning the function itself
    // NOT calling it
    return y;
}

// x() finishes execution,
// but returns function y()
let z = x();

// Calling y() later
// It still remembers variable 'a'
z();

// Output:
// 14


// Example 2 : Closure with Private Variable

function outer() {

    // Private variable
    // Accessible only inside outer()
    var count = 0;

    // Returning anonymous function
    return function inner() {

        // count is remembered even after outer() finishes
        count++;

        console.log(count);

    };
}

// outer() executes only ONCE
// count is initialized with 0
let counter = outer();

// Every call uses the SAME count variable
counter();   // 1

counter();   // 2

counter();   // 3

/*
Memory Visualization

outer()

count = 0

↓

return inner()

↓

outer() removed from Call Stack

↓

inner() still remembers count

↓

counter()

count = 1

↓

counter()

count = 2

↓

counter()

count = 3
*/


// Example 3 : Nested Closure

function superOuter() {

    // Variable of superOuter()
    var a = 10;

    function justOuter() {

        // Variable of justOuter()
        var b = 20;

        // Returning another function
        return function superInner() {

            // superInner() can access BOTH variables
            // a -> from superOuter()
            // b -> from justOuter()

            console.log(a, b);

        };
    }

    // justOuter() returns superInner()
    return justOuter();
}

// superOuter() finishes
// justOuter() also finishes
// But superInner() still remembers a and b
const fn = superOuter();

// Calling returned function
fn();

// Output:
// 10 20


/******************************************************************************

Closure Chain

Global
   │
   ▼
superOuter()

a = 10
   │
   ▼
justOuter()

b = 20
   │
   ▼
superInner()

When superInner() executes

Search for 'a'

superInner ❌
     │
justOuter ❌
     │
superOuter ✅

a = 10


Search for 'b'

superInner ❌
     │
justOuter ✅

b = 20


Output

10 20

******************************************************************************/