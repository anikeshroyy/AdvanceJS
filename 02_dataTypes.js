let name = "Anikesh Roy";                       // string
let age = 23;                                   // int
let isStudent = true;                           // boolean
let college = "GEC Jamui";                      // string
let department = "CSE";                         // string
let store;                                      // undefined
let user = null;                                // null
let bigInt = 123456789012345678901234567890n;   // big int
let id1 = Symbol("id");                         // symbol 
let id2 = Symbol("id");                         // symbol
let arr = [5, 6, 7, 8, 90];                     // array
let dict = {                                    // dictionary
    userName: "ani123",
    pass: "1234",
};

console.log(`My name is: ${name}`);

console.log(typeof (age))
console.log(`I'm ${age} years old`);

console.log(typeof (department))
console.log(`I have studied ${department} from ${college}`);

console.log(`I'm student: ${isStudent}`);

console.log(typeof (store));
console.log(store);

console.log(typeof (user));
console.log(user);

console.log(typeof (bigInt));
console.log(bigInt);

console.log(typeof (id1));
console.log(typeof (id2));
console.log(id1, "&", id2);
console.log(id1 == id2);

console.log(typeof (arr));
console.log(arr);

console.log(typeof(dict));
console.log(dict.userName);
console.log(dict);