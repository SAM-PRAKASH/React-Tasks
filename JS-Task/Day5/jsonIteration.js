//For loop
const people = [
    {
        name: 'John',
        age: 30,
        cars: ['Ford', 'BMW', 'Fiat'],
    },
    {
        name: 'Sam',
        age: 27,
        cars: ['Audi', 'CP', 'MG'],
    },
    {
        name: 'Ram',
        age: 26,
        cars: ['maruthi', 'benz', 'renault'],
    },
];
console.log("For Loop");

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Cars: ${person.cars.join(', ')}`);
    console.log('------------------------------------------------');
}

//For in
console.log("For IN");
for (let index in people) {
    for (let key in people[index]) {
        if (Array.isArray(people[index][key])) {
            console.log(`${key}: ${people[index][key].join(', ')}`);
        } else {
            console.log(`${key}: ${people[index][key]}`);
        }
        
    }
    console.log('------------------------------------------------');
}

//For of
console.log("For of");
for (const person of people) {
    console.log('Name:', person.name);
    console.log('Age:', person.age);
    console.log('Cars:', person.cars);
    console.log('------------------------------------------------');
  }

//ForEach
console.log("ForEach");
people.forEach(person => {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Cars: ${person.cars.join(', ')}`);
    console.log('--------------------------');
  });
  
  
