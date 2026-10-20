const themeToggleBtn =
    document.getElementById("theme-toggle");
const currentTheme =
    localStorage.getItem("theme");
if (currentTheme === "light") {
    document.body.classList.add("light");
    themeToggleBtn.textContent = "☀️";
}
themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    let theme = "dark";
    if (document.body.classList.contains("light")) {
        theme = "light";
        themeToggleBtn.textContent = "☀️";
    } else {
        themeToggleBtn.textContent = "🌙";
    }
    localStorage.setItem("theme", theme);
});
