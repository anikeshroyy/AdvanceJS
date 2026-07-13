// Theme Toggle -------------------------------------------------------
const themeBtn = document.getElementById("themeIcon");

themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-theme");

    if (document.documentElement.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light")


         themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");
          
    }
    else {
        localStorage.setItem("theme", "dark")

         themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");
    }
})

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.documentElement.classList.add("light-theme");
}

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

updateDateTime();
setInterval(updateDateTime, 1000)

// City Search -----------------------------------------------------
const searchCity = document.getElementById("cityQuery");
const searchBtn = document.getElementById("srchBtn");

const lastCity = localStorage.getItem("city") || "Delhi";
fetchWeather(lastCity);

searchBtn.onclick = function () {
    const searchVal = (searchCity.value.trim())

    localStorage.setItem("city", searchVal);

    if (!searchVal) return;

    fetchWeather(searchVal);
}

// Fetch Weather function ---------------------------------------------------------------
async function fetchWeather(city) {
    const API_KEY = "722a2651b9cdff435886dae03f13f69b"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("city not found")
        }

        const data = await response.json();
        console.log(data);

        updateUi(data)
    }
    catch (error) {
        console.log(error.message);
    }
}

// Update UI function --------------------------------------------------------------
function updateUi(data) {
    document.getElementById("temp").textContent = `${Math.round(data.main.temp)}°C`

    document.getElementById("feelsLike").textContent = `Feels Like ${Math.round(data.main.feels_like)}°C`

    document.getElementById("sunrise").textContent =
        new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });

    document.getElementById("sunset").textContent =
        new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });

    document.getElementById("weatherType").textContent = `${data.weather[0].main}`

    document.getElementById("humidity").textContent = `${data.main.humidity}%`

    document.getElementById("pressure").textContent = `${data.main.pressure}hpA`

    document.getElementById("speed").textContent = `${(data.wind.speed * 3.6).toFixed(1)}Km/hr`

    document.getElementById("visibility").textContent = `${Number(data.visibility / 1000)}Km`

    document.getElementById("city").textContent = data.name;

    const weatherIcon = document.getElementById("sun-img");
    const icon = data.weather[0].icon
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.src = iconUrl
}