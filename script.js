const button = document.getElementById("toggleTheme");
const icon = document.getElementById("themeIcon");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        icon.textContent = "☀️";
    } else {
        icon.textContent = "🌙";
    }
});