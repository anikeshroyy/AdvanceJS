console.log("Start")

function cb() {
    console.log("this is settimeout fn")
}

setTimeout(cb, 3000);

console.log("end")




// setTimeout(()=>{
//     console.log("A");
// }, 3000)
// setTimeout(()=>{
//     console.log("B");
// }, 1000)
// setTimeout(()=>{
//     console.log("C");
// }, 2000)




// for(let i=1;i<=3;i++){

//     setTimeout(()=>{
//         console.log(i);
//     },i*1000);

// }



// const timer = setTimeout(() => {
//     console.log("Executed");
// }, 5000);

// console.log(timer);





function greet(name) {
    console.log("Hello", name);
}

setTimeout(greet, 2000, "Anikesh");