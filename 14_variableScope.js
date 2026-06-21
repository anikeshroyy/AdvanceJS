let x = 2;              //this is global variable. //it can be accessed from anywhere.

function fun1() {
    let x = 3;          //this is local variable. //it can't be accessed outside of the function.
    console.log(x);
}

function fun2() {
    let x = 4;          //this is local variable. //it can't be accessed outside of the function.
    console.log(x);
}

fun1();
fun2();