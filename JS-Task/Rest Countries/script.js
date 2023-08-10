function displayAsianCountries() {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then(data => {
      const countriesInAsia = data.filter(country => country.region === 'Asia');
      const countryNames = countriesInAsia.map(country => country.name.common);

      const outputElement = document.getElementById("output");
      outputElement.textContent = "Asian Countries: " + countryNames.join(", ");
      const flagForDisplay = document.getElementById("flagOut");
      countriesInAsia.forEach(country => {
        const img = document.createElement('img');
        img.src = country.flags.png;
        flagForDisplay.appendChild(img);
      });

    })
}

// Call the function to display Asian countries when the page loads
displayAsianCountries();


