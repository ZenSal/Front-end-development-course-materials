
// // function dosomething(){
    
// //     for(let i=0; i<5; i++){
        
// //         if(i!=0){
// //             console.log(t);
// //             var t=9;
// //         }
// //     }
// // }
// // dosomething();

// //Prob 1:

// const num =[2,3,1,3,2];

// function UnqiueNum(array){
//     let result=[];
//     for(let i=0; i<array.length; i++){
//         for(let j=0; j<array.length; j++){
//             if(i!=j && array[i]==array[j]){
//                 break;

//             }if(j==array.length-1){
//                 result.push(array[i]);
//             }
//         }
//     }return result;
// }

// //console.log(UnqiueNum(num));


// const num2 = [2,4,5,3,1];
// let result=[];
// function ascendingOrder(array){
    
//     for(let i=0; i<array.length; i++){
//         for(let j=0; j<array.length; j++){
//             if(i!=j && array[i]>array[j]){
//                 result.push(array[j]);
                
//             }
//         }
//         }return function sort(result){
            
//         }
//     }

// //console.log(ascendingOrder(num2));
// const final = ascendingOrder(num2);
// console.log(final());




// const A = [10,20,10,40,50,70]
// const N = 50;

// function AddPair(array){
//     let B =[];
//     for(let i=0;i<array.length;i++){
//         for(let j=0; j<array.length; j++){
//             if(array[i]+array[i+1]==N){
//                 B.push(i,i+1);
//                 return B;
//             }
//         }
        
//     }
// }

// console.log(AddPair(A));


// const Findnum = [10,20,30,40,5];
// let obj ={}
// function objectadding(array,n){
//     for(let i =0; i<array.length;i++){
//         if(!obj[i.toString]){
//             obj[i.toString] = 1
//         }
//     }
// }
// objectadding(Findnum,45);

function factorial(num){
//     let result=1;
//     for(let i=num; i>1; i--){
//         result*=i;
//     }console.log(result);
    if(num<=1){
        return 1;
    }
    return num*factorial(num-1);
}


console.log(factorial(5));





























