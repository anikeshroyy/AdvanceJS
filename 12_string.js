// length
// trim()
// includes()
// indexOf()
// slice()
// split()
// replace()
// replaceAll()
// toUpperCase()
// toLowerCase()
// startsWith()
// endsWith()
// repeat()


let name = "Anikesh Roy";
console.log(name.length)
console.log(name.indexOf("i"));

let nickName = "   Ani  ";
console.log(nickName.trim());

let fullName = "Anikesh Kumar";
let fistName = "Anikesh";
let lastName = "Kumar";
console.log(fullName.includes(lastName));
console.log(fistName.concat(" ", lastName));

let capsEmail = "ANIKESHWORKMAIL@GMAIL.COM";
console.log(capsEmail.toLowerCase());

let smallEmail = "anikeshworkmail@gmail.com";
console.log(smallEmail.toUpperCase());
console.log(smallEmail.startsWith("ani"));
console.log(smallEmail.endsWith("@gmail.com"));

let fullNamewithSurname = "Anikesh Kumar";
console.log(fullNamewithSurname.replace("Kumar", "Roy"));

let intro = "My Name is Anikesh Kumar Roy";
console.log(intro.slice(2, 7))

let animal = "cat dog elephant cat";
console.log(animal.replaceAll("cat", "monkey"));

let fruits = "mango apple bnana guava";
let fruitsArr = fruits.split(" ");
console.log(fruitsArr);

let pattern = "*";
console.log(pattern.repeat(5))

