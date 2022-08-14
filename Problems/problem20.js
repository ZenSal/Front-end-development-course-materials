
function FindSecondSmallest(array){

    let firstSmallest=array[0];
    let secondSmallest=array[1];
    let j=0;
    //let k=0;

    for(i=2; i<array.length; i++){
        if(firstSmallest>=array[i]){
            firstSmallest[j]=array[i];
        }if(secondSmallest>=array[i]){
            secondSmallest=array[i];
            //console.log(secondSmallest)
        }
    }console.log(secondSmallest);
    //console.log(firstSmallest);

}
FindSecondSmallest([11,32,54,22,13,78]);
FindSecondSmallest([1,22,14,676,443,12]);

