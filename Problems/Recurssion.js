


// function fibonacci(n){
//     let result=0;

//const { Readline } = require("readline/promises");

    
//     for(let i=0; i<=n; i++){
//         if(i==0 || i==1){
//             console.log(i);
//         }else{
          
//             console.log((i-1)+(i-2));
//         }
//     }

// }
// //fibonacci(6);

// // function Printn(n){

// //     console.log(n);

// //     if(n>1){
// //         Printn(n-1);
// //     }
// // }

// // Printn(100);



// function findIfSort(array){  ///normal method
//     let result =[];
//     for(let i=0; i<array.length; i++){
//         if(array[i]>array[i+1]){
//             return false
//         }
//     }return true;

// }

// //console.log(findIfSort([1,2,3,4,5,6]));
// //console.log(findIfSort([11,12,45,32,67]));

// function IfSortArray(array,i){
//     if(i==array.length-1){
//         return true;
//     }
//     if(array[i]>array[i+1]){
//         return false;
//     }
//     return IfSortArray(array, i+1);
// }
// //console.log(IfSortArray([1,2,3,4,5,6], 0));
// //console.log(IfSortArray([1,2,3,5,4,6], 0));

// //const string =["max"];

// function palindrome(str,start,end){
    
//     if(start==end || start>end){
//         return true;

//     }
//     if(str[start]!=str[end]){
//         return false;
//     }
//     return palindrome(str, start+1, end-1)
// }

// const str = "magesh"
// //console.log(palindrome(str, 0, str.length-1));

// const A =[1,2,3,4,5]

// function sumoftriangle(array){
    
//     let result=[];
    
//     for(let i=0; i<array.length-1; i++){
//         result.push(array[i]+array[i+1]);
//     }
//     if(result.length!=1){
        
//         sumoftriangle(result);
//     }
//     console.log(result);
    
// }

// //sumoftriangle(A);
// //console.log(A);


// const symb = [ '{}','[]','()'];

// function parenthis(n){
//     let result =[];
//     for(let i=0; i<5; i++){
//         result.push(n[i] + n[i+1]);
//     }
//      console.log(result);
// }

// // parenthis(5);

//const readline = require("readline");

// let n = parseInt (readline());
//         sumAndAverage(n);
 
// 	function sumAndAverage(n) {
//     var sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }
//     console.log(sum);
//     console.log(Math.floor(sum/n));    
// }


 
// //sumAndAverage(4);

var steps = 0;

function addTillEnd(n){
    var result = 0;
    if(n == 0){
        console.log(steps);
        return
    }
    steps = steps +1;
    let array = n.toString().split('').map(i => Number(i));
    let max = Math.max(...array);
    //console.log(array);
    addTillEnd(n-max);

    

}

//addTillEnd(27)
//addTillEnd(43)

var steps  = 0
function retunrToOne(n){
    n=n-1;
    if(n%2==0){
        n=n/2
    }else if(n%3==0){
        n=n/3
    }
    
    if(n!=1){
        steps=steps+1;
        retunrToOne(n);
    }else{

        console.log(steps);
    }
}

//retunrToOne(20);



const arr = [1,2,1]
let sum = 2;
function backtrack(array){
    let result=[];
    
}
//backtrack(arr)

function fibonacci(n){
    let result=0;
    if(n == 0 || n==1){
        return n
    }
    for(let i=2; i<n; i++){
        result = n-1 + n-2;
    }   console.log(result);
    
    
    //return fibonacci(n-1) + fibonacci(n-2);
}

//fibonacci(6);


var M;
const readline = require("readline");

const r1Interface = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const answer = function(ans){
    M=ans;
    if(N<attendancerequired){
        console.log("you need ",(M-N),"More attendance");
    }else{
        console.log("you've good attendance");

    }
    r1Interface.close();

}

r1Interface.question("Enter the value of M and N:",answer)

function lectureAttendance(M,N){
    console.log(M);

    var attendancerequired = 75 * M;

    
}



function printMatrix(matrix)





























































