
document.getElementById("convertBtn").onclick = function () {
    let temprature = Number(document.getElementById("tempInput").value);
    let selectedConversion = document.getElementById("tempSelection").value;
    if (selectedConversion === "cToF") {
        // Celsius to Fahrenheit
        let farenhite = (temprature * 9 / 5) + 32;
        console.log("C to F")
        console.log(farenhite);
        document.getElementById("displayResult").textContent = `${temprature} Celsius = ${farenhite} Farenhite`;
    }
    else if (selectedConversion === "fToC") {
        // Fahrenheit to Celsius
        let celsius = (temprature - 32) * 5 / 9;
        console.log(celsius);
        document.getElementById("displayResult").textContent = `${temprature} Farenhite = ${celsius} Celsius`;
    }
    else if (selectedConversion === "cToK") {
        // Celsius to Kelvin
        let kelvin = temprature + 273.15;
        console.log(kelvin);
        document.getElementById("displayResult").textContent = `${temprature} Celsius = ${kelvin} Kelvin`;
    }
    else if (selectedConversion === "kToC") {
        // Kelvin to Celsius
        let kelvinToCelsius = temprature - 273.15;
        console.log(kelvinToCelsius);
        document.getElementById("displayResult").textContent = `${temprature} Kelvin = ${kelvinToCelsius} Celsius`;
    }
}