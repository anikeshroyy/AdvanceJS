console.log("-----------------------forEach()----------------------")
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

let newCustomer = [];
const noOfCustomers = [5, 7, 6, 9, 4, 2, 3];
noOfCustomers.forEach((cumNo) => {
    if (cumNo >= 5) {
        newCustomer.push(cumNo);
    }
})

console.log(newCustomer)

console.log("-----------------------filter()----------------------")
const myNumber = [5, 7, 8, 4, 6, 9, 12, 27, 3, 16];
let myNumbers = myNumber.filter((num) => num >= 5);
console.log(myNumbers);

const books = [
    {
        name: "The Silent Forest",
        publishYear: 2018,
        edition: 2,
        genre: "Mystery"
    },
    {
        name: "JavaScript Mastery",
        publishYear: 2022,
        edition: 4,
        genre: "Programming"
    },
    {
        name: "The Lost Kingdom",
        publishYear: 2015,
        edition: 1,
        genre: "Fantasy"
    },
    {
        name: "Data Science Handbook",
        publishYear: 2021,
        edition: 3,
        genre: "Education"
    },
    {
        name: "Future of AI",
        publishYear: 2024,
        edition: 1,
        genre: "Technology"
    },
    {
        name: "The Last Warrior",
        publishYear: 2019,
        edition: 2,
        genre: "Adventure"
    },
    {
        name: "React in Action",
        publishYear: 2023,
        edition: 5,
        genre: "Programming"
    },
    {
        name: "Hidden Truths",
        publishYear: 2017,
        edition: 1,
        genre: "Thriller"
    },
    {
        name: "Modern Web Development",
        publishYear: 2020,
        edition: 2,
        genre: "Programming"
    },
    {
        name: "Space Beyond Earth",
        publishYear: 2016,
        edition: 3,
        genre: "Science"
    }
];

console.table(books.filter((bk) => bk.genre === "Programming"))
console.table(books.filter((bk) => bk.publishYear > 2020))
console.table(books.filter((bk) => bk.edition > 2))
console.table(books.filter((bk) => bk.publishYear <= 2020))
console.table(books.filter((bk) => bk.genre === "Fantasy"))
console.table(books.filter((bk) => bk.name.includes("The")))
console.table(books.filter((bk) => bk.genre === "Programming" || bk.genre === "Technology"))
console.table(books.filter((bk) => bk.publishYear >= 2018 && bk.publishYear <= 2022))
console.table(books.filter((bk) => bk.genre !== "Programming"))

console.log("-----------------------map()----------------------")

const arrayOfNumbers = [5, 7, 2, 4, 11, 6, 3, 5, 8, 12, 10];
console.log(arrayOfNumbers.map((numArr) => numArr * 2));
console.table(arrayOfNumbers);
console.table(arrayOfNumbers.map((numArr) => numArr + 5).filter((numbersArr) => numbersArr >= 15));
console.log(arrayOfNumbers.map((numArr) => { return numArr * 2 - 2 }).filter((numArr) => { return numArr >= 5 }))