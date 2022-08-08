let num = prompt("Enter the number:");

function FindSquareRoot(){
    var num2 =Math.sqrt(num);
    if(num2*num2 == num){
        alert(`The perfect square of the ${num} is ${num2}`);

    }
    else{
        alert(`This ${num} is not a perfect square!!`);

    }
    
    

}

FindSquareRoot();

// function prime(n){
//     for(i=2;i<Math.sqrt(n);i++){
//         if(n%i==0){

//             return false;
//         }
        
//     }return true;
// }

// prime(6)