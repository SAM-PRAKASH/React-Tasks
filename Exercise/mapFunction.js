//Map fuction with only varibale
const arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
arr.map(item => {  sum = sum + item; })
console.log(sum);
//----------------------------------------------------
const as = arr.map(myFunc)
function myFunc(num) {
  return num + num;
}
console.log(as);

// map functin with other function and array

function map(fun, inputs) {
  const arr1 = new Array(inputs.length);
  for (let i = 0; i < inputs.length; i++) {
    arr1[i] = fun(inputs[i]);
  }
  return arr1
}
// Adding
const add = function (num) {
  return num + num;
}

// cube
const cube = function (num) {
  return num * num * num
}

console.log(map(add, arr));
console.log(map(cube, arr));
console.log(add(1));



function map(a,b){
  const ab = new Array(b.length);
  for(let i =0;i<b.length;i++){
    ab[i] = a(b[i]);
  }
  return ab;
}
const addd = function(x){
return x+x
}
arr = [1,2,3,4,5,6];

console.log(map(addd,arr));