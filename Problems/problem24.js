

var input = [
    [3,4,5],
    [3,4,2],
    [2,3,4],
    [4,4,4]
]

function sumcol(input){

    const array=[];

    for(let i=0; i<input[0].length; i++){
        let result=0;
        console.log(input[0].length);
        for(let j=0; j<input.length; j++){
        
            result=result+input[j][i];
            
        }array.push(result)
    }console.log(array);

} 

function sumrow(input){
    let results=[];
   
    for(let i=0; i<input.length;i++){
        let sum = 0;
        for(let j=0; j<input[0].length;j++){
            console.log(input[0].length);
            sum=sum+input[i][j]

        }results.push(sum)
    }console.log(results);
}

sumcol(input);
sumrow(input);

