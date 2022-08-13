

// function PrimeNum(n){
//     for(i=2;i<=n;i++){
//         for(let j=2; j<=i; j++){
//             if(j==i){
//                 console.log(i);
//             }
//             if(i%j==0){
//                 break;

//             }
//         }
//     }
// }
// PrimeNum(100);








function PrimeNum(n){
    for(let i=2; i<=n; i++){
        for(let j=2; j<=i; j++){
            if(i==j){
                console.log(i);
            }
            if(i%j==0){
                break;  
            }
        }
    }
}


PrimeNum(20);
