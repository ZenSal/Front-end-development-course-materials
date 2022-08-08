
// // //syntax of function
// // function addTwonumber(x,y){
// //     var result = x+y;
// //     //console.log(result);
// //     return result;
// // }

// // //how to call a function
// // output = addTwonumber(2,3);
// // console.log(output);
 
// function maths(x,y,z){
//     result = x*y/z;
//     console.log(result);

// }

// //output = maths(5,6,7);
// //console.log(output);
// //variable decleared inside the function can't be called outside the function
// maths(4,5,6);
// var c =10;
// var d=c++; // here d value is 10
// const e = c;
//  // here after the increment the d value becomes 11
// //c=c+1;
// console.log(d);
// console.log(e);


const addfun = (a,b)=>{  // creating a function without using function keyword
    const result = a+b;
    console.log(result);


};

addfun(2,3);
