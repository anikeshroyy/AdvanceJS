const users = ["Ram", "Shyam", "Anikesh"];
users.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});

const arr = [5, 6, 9, 10, 22, 56];
arr.forEach(function (value, index) {
    console.log(index, "-", value)
});

const myNum = [12, 2, 6, 5, 8];
myNum.forEach(function (value, index) {
    console.log(index, ":", value * 2)
});

const numbers = [5, 7, 3, 5];
let totalSum = 0;
numbers.forEach((value) => {
    totalSum += value;
});
console.log("Total is :", totalSum);

const nums = [2, 4, 6];
nums.forEach((value, index) => {
    console.log(value + index);
});