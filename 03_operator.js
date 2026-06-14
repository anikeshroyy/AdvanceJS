let student = 30;
student += 1;
console.log(student);

let age = 20;
age -= 2;
console.log(age);

let mul = 2;
mul *= 2;
console.log(mul);

let div = 32;
div /= 4;
console.log(div);

let set = 40;
set %= 4;
console.log(set);


// operator precedence
// 1. parenthesis()
// 2. exponents
// 3. modulo, division, multiplicaton
// 4. addition substraction
// when operator has same precedence thent it was treated from left to right (% / *)

let ran = 44+3-(12*2)/2%2;
console.log(ran);

let result = 3;
result = result ** 2;
console.log(result);