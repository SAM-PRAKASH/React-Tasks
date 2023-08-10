// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

let n = userInput[0].split(" ");
let cout = (n[0])*(n[1]);
 if((n[0]*n[0])==cout&&(n[1]*n[1])==cout){
     console.log("yes");
 }else{
     console.log("no");
 }
  //end-here
});