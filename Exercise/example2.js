// Function to fetch data from the API
async function fetchCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();
        return countries;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display flags in the container
async function displayFlags() {
    const flagContainer = document.getElementById('flagContainer');
    const countries = await fetchCountries();

    countries.forEach((country) => {
        const flagName = country.name.common;
    });
    return flagName
}

// Call the function to display flags when the page loads
displayFlags();
