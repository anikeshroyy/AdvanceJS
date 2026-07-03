console.log("Program Started")

setTimeout(() => {
    console.log("Set time Out Executed")
}, 2000)


let endDate = Date.now() + 5000;
while (Date.now() < endDate) {
    // code to be executed here
}

console.log("while expire")
