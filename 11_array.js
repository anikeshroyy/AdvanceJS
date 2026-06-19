// ------------------------------------------ Create Array ------------------------------------------

let studentArr = ["Anikesh", "Rahul", "Mahi"];

console.log(studentArr);


// ------------------------------------------ Access Elements ------------------------------------------

console.log(studentArr[0]); // Anikesh
console.log(studentArr[1]); // Rahul
console.log(studentArr[2]); // Mahi


// ------------------------------------------ Add Element at End ------------------------------------------

studentArr.push("Rohan");

console.log(studentArr);


// ------------------------------------------ Remove Last Element ------------------------------------------

studentArr.pop();

console.log(studentArr);


// ------------------------------------------ Add Element at Beginning ------------------------------------------

studentArr.unshift("Rohan");

console.log(studentArr);


// ------------------------------------------ Remove First Element ------------------------------------------

studentArr.shift();

console.log(studentArr);


// ------------------------------------------ Array Length ------------------------------------------

console.log(studentArr.length);


// ------------------------------------------ Check Existence ------------------------------------------

console.log(studentArr.includes("Rahul"));
console.log(studentArr.includes("Aman"));


// ------------------------------------------ Find Index ------------------------------------------

console.log(studentArr.indexOf("Mahi"));


// ------------------------------------------ Sort Array ------------------------------------------

studentArr.sort();

console.log(studentArr);


// ------------------------------------------ Reverse Array ------------------------------------------

studentArr.reverse();

console.log(studentArr);


// ------------------------------------------ Loop Through Array ------------------------------------------

for (let i = 0; i < studentArr.length; i++) {
    console.log(studentArr[i]);
}


// ------------------------------------------ for...of Loop ------------------------------------------

for (let student of studentArr) {
    console.log(student);
}