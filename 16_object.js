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

const customer = {
    fullName: "Anikesh Roy",
    userName: "aniraj972",
    isOldCustomer: true,
    cart: ["keyboard", "mouse", "monitor"],
    address: {
        street: "paschim tola",
        village: "suriyahi",
        district: "madhubani",
        pinCode: 847409,
    },
    paymentMethod: {
        method1: "Upi",
        method2: "Card",
    },
    completePurchase: () => { console.log("Order Placed") },
}

console.log(`customer full name is : `, customer.fullName);
console.log(`customer user name is : `, customer.userName);
console.log(`is old customer? : `, customer.isOldCustomer);
console.log(`cart item : `, customer.cart);
console.log(`cart 2nd item : `, customer.cart[1]);
console.log(`customer address is : `, customer.address);
console.log(`customer street address is : `, customer.address.street);
console.log(`available payment method :`, customer.paymentMethod);
customer.completePurchase();

for (const property in customer.address) {
    console.log(customer.address[property])
}

console.log(typeof (customer))
console.log(typeof (customer.fullName))
console.log(typeof (customer.cart))
console.log(typeof (customer.address))

const objArr = [
    {
        name: "papaya",
        colour: "yellow",
    },
    {
        name: "tomato",
        colour: "red",
    },
    {
        name: "brinjal",
        colour: "green",
    },
]
console.log(objArr[0].name)
console.log(objArr[1].colour)
console.log(objArr[2].name)