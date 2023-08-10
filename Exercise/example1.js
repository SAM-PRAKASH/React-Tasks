//without initial value
const arr = [1, 2, 3, 4, 5];
const sum1 = arr.reduce((acc, curr) => {
    return acc + curr;
})
console.log(sum1);

//sum of odd nums
const arr2 = [3, 4, 2, 7, 9, 1, 8, 6, 5]
const sum3 = arr2.reduce((acc, curr) => {
    if (curr % 2 != 0) {
        return acc * curr;
    }
    return acc
})

console.log(sum3)

// sum of even nums

const arr4 = [3, 4, 2, 7, 9, 1, 8, 6, 5]
const sum4 = arr4.reduce((acc, curr) => {
    if (curr % 2 == 0) {
        return acc * curr;
    }
    return acc
}, 1)

console.log(sum4);

//Selecting audlts from the array of arguments

let age = [20, 15, 25, 18, 34, 12]

const eligible = age.filter((i) => {
    return 18 <= i;
})
console.log(eligible)

