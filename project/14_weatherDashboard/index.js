const themeBtn = document.getElementById("themeIcon");

themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-theme");
})