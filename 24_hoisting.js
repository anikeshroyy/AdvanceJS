console.log(a);

var a = 10;

function test() {
    console.log(a);

    a = 20;

    console.log(a);

    var a = 30;

    console.log(a);
}

test();

console.log(a);