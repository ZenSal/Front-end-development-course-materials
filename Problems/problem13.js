


// we need an array -> we got
// we need to itratre -> loop
//we need to store the result in var ->



function reversearray(array){
    let result =[];
    for(i=array.length-1; i>=0; i--){
        //result =+ array[i];
        result.push(array[i])
        
    }console.log(result);
}

function reversearray2(array){
    let result =[];
    let j=0;
    for(i=array.length-1; i>=0; i--){
        //result =+ array[i];
        //result.push(array[i])
        result[j]=array[i];
        j++;

    }console.log(result);
}

reversearray([1,2,3,4]);
reversearray([7,5,6,8]);
reversearray2([4,7,6,40,9]);
reversearray(["magu","manish","jim","carl"]);


