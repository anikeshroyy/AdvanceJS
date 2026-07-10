async function getData() {
    return pr;
    console.log("Hello World")
}

const pr = new Promise((resolve, reject) => {
    resolve(2 + 2);
})

getData().then((data) => {
    console.log(data)
})