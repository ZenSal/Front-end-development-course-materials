
// function reversePyramid(num){
    
//     for(let i=1; i<=num; i++){
//         let result="";
//         for(let j=1; j<i; j++){
//             result+=" ";
//         }
//         for(let k=i; k>num; k++){
//             result+=k+" ";
//         }console.log(result);
//     }

// }
// reversePyramid(6);




function reversepyramid(num){
    for(let i=1; i<=num; i++){
        let result=""; // lines for the pattern
        for(let j=0; j<i; j++){
            result+=" ";
        }
        for(let k=i; k<=num; k++){
            result+=k+" ";
            }
        }console.log(result);
    }



reversepyramid(9)