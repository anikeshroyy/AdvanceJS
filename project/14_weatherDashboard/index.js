const themeBtn = document.getElementById("themeIcon");

themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-theme");
})

// Current Date And Time -------------------------------------------
const currentTime = document.getElementById("time");
const currentDate = document.getElementById("date")

function updateDateTime() {
    const now = new Date();

    currentDate.textContent = now.toLocaleDateString("en-In", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    currentTime.textContent = now.toLocaleTimeString();
}

setInterval(updateDateTime, 1000)

// City Search --------------------------------------------------------------
const searchCity = document.getElementById("cityQuery");
const searchBtn = document.getElementById("srchBtn");

searchBtn.onclick = function () {
    const searchVal = (searchCity.value.trim())
    document.getElementById("city").textContent = `${searchVal}`;
}