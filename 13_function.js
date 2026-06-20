function greet(name) {
    console.log("Hello", name);
}
greet("Ram");

function add(x, y) {
    return x + y;
}
console.log(add(2, 3))


let userCollection = ["ram", "shyam", "Anikesh", "Amit"];

for(let i = 0; i < userCollection.length; i++){
    userDetails(userCollection[i], 22)
}

function userDetails(userName, age) {
    console.log(`Username is ${userName} and he is ${age} yearls old!`)
}

// userDetails("ani", 22)
