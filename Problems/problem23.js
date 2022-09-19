

var dia =[
    [1,0,0,0],
    [0,2,0,0],
    [0,0,3,0],
    [0,0,0,4]
]

function Printdia(dia){

    for(let i=0; i<dia.length; i++){
        for(let j=0; j<dia[i].length; j++){
            if(i==j && dia[i][j]==0){
                return true;
            }
        }
    }return false;

}

Printdia(dia);