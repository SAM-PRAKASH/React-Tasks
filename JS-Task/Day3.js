// Json Comparion
let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

let string1 = (JSON.stringify(obj1)).split("").sort().join('');
let string2 = (JSON.stringify(obj2)).split("").sort().join('');

if (string1 === string2) {
    console.log("Both are equal")
} else {
    console.log("Both are not equal");
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        //Countries Flags
        const countriesFlags = data.map(country => country.flags.png);
        console.log(countriesFlags.sort());


        // Country names
        const countriesName = data.map(country => country.name.common);
        console.log(countriesName.sort());
        // Regions
        const regionNames = data.map(country => country.region);
        console.log(regionNames.sort());
        // SubRegions
        const subRegions = data.map(country => country.subregion);
        console.log(subRegions.sort());
        // Population
        const populations = data.map(country => country.population);
        console.log(populations);
    })

