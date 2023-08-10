
// Example1
function sumOfNums(numbers, callback) {
    setTimeout(function () {
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        callback(sum);
    }, 5000);
}
const numbers = [1,2,3,4,5];
sumOfNums(numbers, function (result) {
    console.log(result);
});

// Example2
function addingNums(a,b,callback){
setTimeout(function(){
    const sum1 = a+b;
    callback(sum1);
},4000)
}
addingNums(2,3,function(result){
console.log(result)
});

//--------------------------------------------------------------------


function adding(a,b,callback){
const sum = a+b;
callback(sum);
}

adding(2,8,function(result){
    console.log(result);
})