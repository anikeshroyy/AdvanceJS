let randomNumber = Math.floor(Math.random() * 100 + 1);
let attempts = 0;

document.getElementById("resetBtn").onclick = function () {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    attempts = 0;
    document.getElementById("totalAttempts").style.display = "none";
    document.getElementById("totalAttempts").textContent = "";
    document.getElementById("displayResult").textContent = "";
    document.getElementById("userInput").value = "";
    document.getElementById("guessBtn").disabled = false;
}

document.getElementById("guessBtn").onclick = () => {
    let userInput = Number(document.getElementById("userInput").value.trim());

    if (isNaN(userInput)) {
        document.getElementById("errMsg").textContent = `Enter a valid Number`
    }
    else if (userInput < 1 || userInput > 100) {
        document.getElementById("errMsg").textContent = `Enter Number Between 1 to 100`
    }
    else {
        attempts++;
        if (randomNumber == userInput) {
            // document.getElementById("displayResult").textContent = `You Guessed it`;
            document.getElementById("displayResult").textContent = "";
            document.getElementById("totalAttempts").style.display = "block";
            document.getElementById("totalAttempts").textContent = `You Guessed it in ${attempts} attempts`;
            document.getElementById("guessBtn").disabled = true;
        }
        else if (randomNumber > userInput) {
            document.getElementById("displayResult").textContent = `You Guessed too Low`
        }
        else {
            document.getElementById("displayResult").textContent = `You Guessed too High`
        }
    }

    console.log(`random number : ${randomNumber}`);
    document.getElementById("userInput").value = "";
}
