let num = 0;
function printNum() {
    num++;
    console.log(num);

    if (num >= 3) {
        clearInterval(timer)
    }

}

const timer = setInterval(printNum, 1000);