var arr = [1,2,3,4,5];

var add = arr.reduce((acct,num) => acct + num,arr[2])
console.log(add);