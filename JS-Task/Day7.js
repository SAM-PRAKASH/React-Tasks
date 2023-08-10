fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())

  //Get all the countries from Asia continent /region using Filter function
  .then(data => {
    const countriesInAsia = data.filter(country => country.region === 'Asia');
    const countryNames = countriesInAsia.map(country => country.name.common);
    console.log("Asian Countries: "+countryNames.join(","));
  })

  //Get all the countries with a population of less than 2 lakhs using Filter function
  .then(data =>{
    const countryNames = data.filter(country => country.population <= "200000");
    const populationUnderTwoL = countryNames.map(country => country.name.common);

    console.log("Following Countries are having less than 2 lakhs populatoon : "+populationUnderTwoL.join(","));
  })

  //Print the following details name, capital, flag using forEach function
  .then(data => {
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags);
      console.log('------------------------');
    });
  })

  //Print the total population of countries using reduce function
  .then(data =>{
    const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);
    console.log("Total population of countries : "+totalPopulation);
  })

  //Print the country which uses US Dollars as currency.
  .then(data => {
    const usdCountries = data.filter(country => {
      const currencies = country.currencies;
      return currencies && currencies.USD;
    });
    const countryNames = usdCountries.map(country => country.name.common);
    console.log(countryNames);
  })
