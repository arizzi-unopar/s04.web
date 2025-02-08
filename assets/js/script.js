document.getElementById("zodiacForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const dateOfBirth = document.getElementById("dateOfBirth").value;
    if (!dateOfBirth) return;

    const birthMonthDay = dateOfBirth.slice(5); // Get MM-DD format

    try {
        // Fetch the XML file
        const response = await fetch("signos.xml");
        const xmlText = await response.text();

        // Parse the XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
        const signos = xmlDoc.getElementsByTagName("signo");

        let foundSign = null;

        // Iterate through the signs
        for (let signo of signos) {
            const start = signo.getElementsByTagName("dataInicio")[0].textContent;
            const end = signo.getElementsByTagName("dataFim")[0].textContent;
            const name = signo.getElementsByTagName("nome")[0].textContent;
            const description = signo.getElementsByTagName("descricao")[0].textContent;

            // Check if the date falls within the range
            if (
                (birthMonthDay >= start && birthMonthDay <= end) || 
                (start > end && (birthMonthDay >= start || birthMonthDay <= end)) // Handles date range crossing year-end
            ) {
                foundSign = { name, description };
                break;
            }
        }

        const resultDiv = document.getElementById("result");

        if (foundSign) {
            resultDiv.innerHTML = `
                <h2>Seu Signo: ${foundSign.name}</h2>
                <p>${foundSign.description}</p>
            `;
        } else {
            resultDiv.innerHTML = `<p>Não foi possível determinar seu signo.</p>`;
        }
    } catch (error) {
        console.error("Erro ao carregar os signos:", error);
    }
});
