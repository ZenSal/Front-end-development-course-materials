var num = parseFloat(prompt("Enter the numberic value :"));


function IsthenumberisEvenorOdd(){
    if( num%2 == 0){
        alert("This is a even number!!");
    
    }
    else if( num%1 !== 0){
        console.log(typeof num);
        alert("This is a decimal value please re-enter the correct value!!");
    }
    
    else{
        alert("This is a odd number!!");
    }
    
    
}

IsthenumberisEvenorOdd();

