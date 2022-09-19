
// bubble sort
var num =[2,3,5,6,4,1]

function ascending_order(array){

    for(let i = 0; i<array.length-1; i++){
        if(array[i]>=array[i+1]){
            array[i]=array[i+1]
            
        }

}console.log(array);
}

//ascending_order(num)

var values =[5,4,3,2,1,6,2];

 
function FindLargest(array){
    let result = [];
    for(let i=0; i<array.length-1; i++){
        for(let j=0; j<array.length-1; i++){
            if(array[j]<array[j+1]){
                result = array[j+1]
                array[j+1] = array[j];
                array[j] = result;
            }
        }console.log(result);

    }
    
}

//FindLargest(values);

var countries =["india","austria","china","russia","brazil"]

function sortcon(array){
    for(let i=0; i<array.length; i++){
        var isSwapped=false;

        for(let j=0; j<array.length-1-i; j++){
            if(array[j].localeCompare(array[j+1])!= -1){
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                var isSwapped=true;
            }
        }if(!isSwapped) break;
    } return array
}

//console.log(sortcon(countries));

function bubbleDes(n){
    for(let i=0; i<n; i++){
        var temp = n.toString();
        if(temp!=0){
            
        }
    }return temp;
    

}

//console.log(bubbleDes(100));

var numbers = [10,5,8,20,2,18]

function select(array){
    for(let i=0; i<array.length-1; i++){
        for(let j=0; j<array.length-1; j++){
            if(array[j]>array[j+1]){
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp
            }
        }
        
        
    }return array;
}

console.log(select(numbers));
















