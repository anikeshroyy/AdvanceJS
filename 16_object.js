const student = {
    firstName: "Anikesh",
    lastName: "Roy",
    email: "anikeshworkmail@gmail.com",
    age: 23,
    sayHello: function () { console.log("Hello Everyone") },
}


console.log(student.firstName + " " + student.lastName);
console.log(student.lastName);
console.log(student.age);
console.log(student.email);
student.sayHello()

const person = {
    firstName: "Modi",
    lastName: "Jii",
    email: "modijii@gmail.com",
    employed: true,
    age: 23,
    sayHi: () => { console.log("Hii Everyone") },
}

console.log(person.firstName + " " + person.lastName);
console.log(person.lastName);
console.log(person.age);
console.log(person.email);
person.sayHi()