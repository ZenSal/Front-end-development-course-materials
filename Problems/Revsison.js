
//natural numbers 

function natural_num(n){
    let result=0;
    for(let i=1; i<=n; i++){
        result = result + i;
    }console.log(result);
    
}

natural_num(5);

function natural_num2(n){
    let result=0; // c1
    for(let i =1; i<=n; i++){ // n
        for(let j=1; j<=i; j++){ // 
            result ++;
        }
    }return result
}

var result2 = natural_num2(5);
console.log(result2);

function natural_num3(n){

    return n*(n+1)/2
}

console.log(natural_num3(5))