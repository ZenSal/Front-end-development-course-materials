
var num =[1,4,5,6,3,10,8];

function ascendingOrder(array){
    let result=[];
    for(let i=1; i<array.length; i++){
        for(let j=i; j<=array.length-1; j++){
            if(array[j]>array[j+1]){
                array[j]=array[j+1];
                result.push(array[j]);
            }
        }
        
        

        }
        
        console.log(result);
        
    }


ascendingOrder(num);
