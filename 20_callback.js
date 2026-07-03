setTimeout(() => {
    console.log("timer end")
}, 2000)

function x(y) {
    console.log("X");
    y();
}

x(function y() {
    console.log("Y");
})