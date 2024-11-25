// Function to fetch data from a given URL using async/await
// I denne her kode prøver vi at hente noget data fra google. 
// Mening med koden er at vi skal kunne se at hvis vi fjerner "await", så kører koden videre uden at have nået at hente dataen fra google
// vi bruger await til at give google tid til at sende og hente data, så vi ikke får fejl
// Hvis koden kører rigtigt så får vi html tilbage, ellers bliver det til en fejl, da der ikke er blevet hentet noget data
// prøv at fjerne et af await orderne i den øverste del af funktionen og se hvad forskelle i konsol outputtet. 
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


    // URL to fetch data from
    const url = 'https://www.google.com';
    // Fetch data and output the first 100 characters

    async function displayData() {
        const data = await fetchData(url);
        if (data) {
            console.log(data.substring(0, 100));
        }
    }

    displayData();