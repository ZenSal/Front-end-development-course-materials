

function AddAllnum(num){
    let numStr=num.toString(); // converted number to string
    if(numStr.length==1){
        return numStr;
    }
    let sum=0;
    for(let i=0; i<=numStr.length-1; i++){
        
        sum+=Number(numStr[i]);// string to number 
    }if(sum>9){
        console.log("The sum value is greater than one digit!! redo the sum: " +sum);
        AddAllnum(sum);
    }else{
        console.log(sum);

    }
    

}
AddAllnum(123456);

function repetation(num){
    repStr=num.toString();
    let result=0
    
    for(i=repStr.lenght;i<=0;i--){
        result=repStr[i];
         


    }

}
repetation(123)