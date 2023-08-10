// import {add} from  "./Exam.js"; 


// console.log(add(...b));


// (function (a,b) {
//     console.log(a+b)
// })(5,2);


function outer(){
    var a = 10;
    function inner(){
        return a;
    }
    return inner;
}
console.log(outer()());