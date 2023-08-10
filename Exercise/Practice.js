let a = 8 
let b = [1,2,3,4,4,4,5,6]
let stack =[];
for(i=0;i<a;i++){
    let fi = b.indexOf(b[i]);
    let li = b.lastIndexOf(b[i]);
    if(fi!=li){
        stack.push(b[i])
    }
}
let uniqueSet = new Set(stack);
let uniqueArray = Array.from(uniqueSet);
console.log(uniqueArray.join(" "));
