

// function sumOfdigit(num){
//     var num2 = num.toString();
//     var num3 = 0;
//     if(num<3){ /// checking whether it has inner  numbers  
//         console.log(-1);
//     }
//     for(i=1; i<=num.length-2; i++){
//         var num3 =+ Number(num2[i]);
        
//     }console.log(num3);

// }

// sumOfdigit(2124);

function SumString(num){
    num2 = num.toString();
    if(num2.length<3){
        console.log(-1);
        return;
        
    }
    let num3=0;
    for(let i=1; i<=num2.length-2; i++){
        num3+=Number(num2[i]);
    }console.log(num3);

}
SumString(2124);
SumString(100);
SumString(70);
