// const food1 = "banana";
// const food2 = "papaya";
// const food3 = "guava";
// const food4 = "apple";
// const food5 = "cucumber";

// function openFrideg(...foods) {
//     console.log(foods)
// }

// openFrideg(food1, food2, food3, food4, food5);


const food1 = "banana";
const food2 = "papaya";
const food3 = "guava";
const food4 = "apple";
const food5 = "cucumber";

function openFrideg(...foods) {
    return foods;
}

let foods = openFrideg(food1, food2, food3, food4, food5);
console.log(foods);


const num1 = 8;
const num2 = 7;
const num3 = 6;
const num4 = 5;
const num5 = 4;

function total(...sum) {
    let result = 0;
    for (let number of sum) {
        result += number;
    }
    // return result;
    console.log(`total is : ${result}`);
}

total(num1, num2, num3, num4, num5);

function average(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    // return result;
    console.log(`average is : ${result / numbers.length}`);
}

average(num1, num2, num3, num4, num5);

function combineStrings (...strings){
    return strings.join(" ");
}  

const fullName = combineStrings("Mr.", "Anikesh", "Roy");
console.log(fullName)