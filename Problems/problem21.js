
var spiral =[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

let startRow=0;
let startCol=0;
let endcol=spiral.length-1;
let endrow=spiral[0].length-1;

function Printspiral(spiral){

    for(let i=startCol; i<=endcol; i++){
        console.log(spiral[startRow][i]);
    }
    startRow=startRow+1

    for(let i=startRow; i<=endrow; i--){
        console.log(spiral[i][endcol]);

    }
    endcol = endcol-1;
    for(let i=endcol; i>=startCol; i--){
        console.log(spiral[endrow][i]);
    }
    endrow=endrow-1;
    for(let i=endrow; i>=startRow; i--){
        console.log(spiral[i][startCol]);
    }

}

Printspiral(spiral);
