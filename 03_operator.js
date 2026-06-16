// -------------------------- Assignment Operators -------------------

let student = 30;
student += 1;
console.log(student);


// -------------------------- Operator Precedence --------------------

let ran = 44 + 3 - (12 * 2) / 2 % 2;
console.log(ran);


// -------------------------- Exponent Operator ----------------------

let result = 3;
result = result ** 2;
console.log(result);


// -------------------------- Ternary Operator -----------------------

let age = 25;
let message = age >= 18 ? "You can vote" : "You can't vote";
console.log(message);


// -------------------------- Greeting Example -----------------------

let time = 16;
let greetings = time >= 12 ? "Good Afternoon" : "Good Morning";
console.log(greetings);


// -------------------------- Student Status --------------------------

let isStudent = false;
let msg = isStudent ? "You are a student" : "You are not a student";
console.log(msg);


// -------------------------- Discount Calculator ---------------------

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(
    `You purchased products worth $${purchaseAmount}.
Discount: ${discount}%.
Final Amount: $${purchaseAmount - purchaseAmount * (discount / 100)}`
);