let a = prompt("Enter Number A");
let b = prompt("Enter Number B");

try {

    if (isNaN(a) || isNaN(b)) {
        throw new Error("Only numbers are allowed.");
    }

    let sum = Number(a) + Number(b);

    console.log("Sum is:", sum);

}
catch(error){

    console.error("Error:", error.message);

}
finally{

    console.log("Program Finished");

}