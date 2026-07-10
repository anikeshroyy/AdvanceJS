// async function getData() {
//     return pr;
//     console.log("Hello World")
// }


// getData().then((data) => {
//     console.log(data)
// })


const pr = new Promise((resolve, reject) => {
    console.log("Pr Start")

    setTimeout(() => {
        resolve(2 + 2);
    }, 3000);

    console.log("Pr End")
})

const newFn = async () => {
    console.log("Fn Start")
    const newPromise = await pr;
    console.log(newPromise);
    console.log("Fn End")

}

newFn();