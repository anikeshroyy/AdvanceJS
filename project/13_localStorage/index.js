const user = {
    name: "Anikesh",
    age: 23,
    paymentMethod: {
        method: ["upi", "card", "paypal"]
    }
}

localStorage.setItem("users", JSON.stringify(user))

const data = localStorage.getItem("users");

console.log(typeof (data))
console.log(data)

const newUser = JSON.parse(data)
console.log(typeof (JSON.parse(newUser)))
console.log(newUser.paymentMethod)