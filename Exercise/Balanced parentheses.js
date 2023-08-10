function balancedPar(simbols){
    let stack = [];
    
    for(let i =0;i<simbols.length;i++){
        if(simbols[i]=="("||simbols[i]=="{"||simbols[i]=="["){
            stack.push(simbols[i]);
            continue;
        }
        if(stack.length==0){
            return false;
        }
        
        let check;
        switch(simbols[i]){
            
            case ")":
                check = stack.pop();
                if(check == "{"||check == "["){
                    return false;
                }
                break;
            case "}":
                check = stack.pop();
                if(check == "("||check == "["){
                    return false;
                }
                break;
            
            case "]":
                check = stack.pop();
                if(check == "("||check == "{"){
                    return false;
                }
                break;
    }
}
return (stack.length == 0);
}

if(balancedPar("(){}[")){
    console.log("Balanced");
}else{
    console.log("Unbalanced");
}