
var wave=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

function PrintWave(wave){

    const collength= wave[0].length;
    for(col=0; col<collength; col++){

        if(col%2==0){
            for(i=0; i<=wave.length-1; i++){
                console.log(wave[i][col])
            }
        
        }else{
            for(i=wave.length-1; i>=0; i--){
                console.log(wave[i][col]);
            }
        }
    }

   
}

PrintWave(wave);
