//Print odd numbers in an array

//Anonymous Function
const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let stack = [];

const printOddNumbers = function (array) {
  const oddNumbers = array.filter(number => number % 2 !== 0);
  oddNumbers.forEach(number => stack.push(number));
  console.log("Anonymous Fuction");
  console.log(stack);
};

printOddNumbers(num1);

//Arrow Function
const oddNumbers = num1.filter(num => num % 2 !== 0);
console.log("Arrow function");
console.log(oddNumbers);
//-------------------------------------------------------------------------------------------

// Sum of all numbers in an array

//Anonymous Function
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfNums = function (array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum
}
console.log("Anonymous Fuction");
console.log(sumOfNums(num2));

//Arrow Function
const sum = num2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Arrow function");
console.log(sum);
//-------------------------------------------------------------------------------------------
//Return all the prime numbers in an array
//Anonymous Function
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = numbers.filter(function (num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
});
console.log("Anonymous Fuction");
console.log(primeNumbers);

//Arrow Function
const isPrime = num => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
};

const primeNumbers2 = numbers.filter(num => isPrime(num));
console.log("Arrow function");

console.log(primeNumbers2);

//-------------------------------------------------------------------------------------------
// Return all the palindrome in an array
//Anonymous Function
const words = ["madam", "water", "madam", "hello", "mom", "dad", "hello", "stone"];
const palindromes = words.filter(function (word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
});
console.log("Anonymous Fuction");
console.log(palindromes);

//Arrow Function
const palindromes1 = words.filter(word => {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
});
console.log("Arrow function");
console.log(palindromes1);

//-------------------------------------------------------------------------------------------

//Remove duplicates from an array
//Anonymous Functio
const duplicates = words.filter(function (word, index, arr) {
  return arr.indexOf(word) === index;
});
console.log(duplicates);



