
// function star(num){
//     for(let i=0; i<=num; i++){
//         let star ="";
//         //let space ="";
//         for(k=1; k<=num-i;k++){
//             star +="";

//         }
//         for(let j=0;j<=i;j++){
//             star +="*";
//             //space +="";
        
        
//     }console.log(star);
// }
// }

// star(6);


function stars(num){
    
    for(i=1;i<=num;i++){
        let star=""
        for(let k=1; k<=num-i; k++){
            star+= " ";
        }
        for(let j=0; j<2*i-1; j++){
            star+=j;
            
        }console.log(star);
    }


}
stars(10)