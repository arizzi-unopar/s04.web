document.getElementById("zodiacForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const dateOfBirth = document.getElementById("dateOfBirth").value;
    if (!dateOfBirth) return;

    const birthMonthDay = dateOfBirth.slice(5); // Get MM-DD format

    try {
        const response = await fetch("signos.json");
        const signos = await response.json();

        const zodiac = signos.find(signo =>
            birthMonthDay >= signo.start && birthMonthDay <= signo.end
        );

        const resultDiv = document.getElementById("result");
        if (zodiac) {
            resultDiv.innerHTML = `
                <h2>Seu signo do zodíaco é: ${zodiac.name}</h2>
                <p>${zodiac.description}</p>
            `;
        } else {
            resultDiv.innerHTML = `<p>Não é possível determinar seu signo do zodíaco.</p>`;
        }
    } catch (error) {
        console.error("Erro ao buscar signos do zodíaco:", error);
    }
});
