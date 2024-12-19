
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.querySelector(".theme-toggle-button");

    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });

    // Застосовуємо збережену тему при завантаженні сторінки
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});
