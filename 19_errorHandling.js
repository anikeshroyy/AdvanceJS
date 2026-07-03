let product1 = "Aniesh";
let product2 = "Ramu"

let price = product1 + product2;

try {
    if (isNaN(product1) || isNaN(product2)) {
        throw new Error("Price of product must be in number");
    }
    else {
        console.log("price is: ", price)
    }
}
catch (err) {
    console.log(err);
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}