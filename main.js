const generateBtn = document.getElementById("generate");
const numbersDiv = document.getElementById("numbers");
const themeToggleBtn = document.getElementById("theme-toggle");

generateBtn.addEventListener("click", () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    numbersDiv.innerHTML = "";
    for (const number of numbers) {
        const span = document.createElement("span");
        span.textContent = number;
        numbersDiv.appendChild(span);
    }
});

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});