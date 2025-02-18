function calculateSavings() {
    let budget = Number(document.getElementById("budget").value);
    let savings = Number(document.getElementById("savings").value);
    let goal = Number(document.getElementById("goal").value);
    let resultElement = document.getElementById("result");

    if (goal > 0 && savings > 0) {
        let months = Math.ceil(goal / savings);
        resultElement.textContent = `Você alcançará sua meta em aproximadamente ${months} meses.`;
    } else {
        resultElement.textContent = "Por favor, insira valores válidos para calcular.";
    }
}
