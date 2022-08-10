
function subarraySort(array){
    //if(array.length==0){
        //return true;
    //}
    let startex;
    let endex;
    let decreasingArray=[];
    for(let i=0;i<array.length;i++){
        
        if(array[i]>array[i+1]){
            startex=i;
            break;

        }
    }
    for(i=startex; i<array.length; i++){
        
        if(array[i]<array[i+1] || i==array.length-1){
            endex=i;
            break;
        }
    }

    for(let i=startex; i<=endex; i++){
        
        decreasingArray.push(array[i]);
    }
    //console.log(decreasingArray);

    for(let i=decreasingArray.length-1; i>=0; i--){
        array[startex]=decreasingArray[i];
        subarraySort(array);
        startex++;

    }
    console.log(array);

}

//subarraySort([1,2,5,4,3]);

subarraySort([1,2,3,4,6,5,7,8,9,12,11,10]);
