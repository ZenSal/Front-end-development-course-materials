

function FindMinandMax(array){
    var min = 0; // assigning values
    var max = 0;
    for (i=0; i<=array.length; i++){
        if(array[i]<min){
            min = array[i]; // comparison 
        }if(array[i]>max){
            max =array[i] ;
        }
    }console.log(min);
    console.log(max);

}

//FindMinandMax([18,3,16,7]);
//FindMinandMax([2,3,-4,5]);
FindMinandMax([5,3,-4,10]);
