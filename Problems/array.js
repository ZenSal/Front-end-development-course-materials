

// let arrayOfdata = [10,23,34,"hello","code",23];

// console.log(arrayOfdata[0]+arrayOfdata[2]);
// console.log(`There are ${arrayOfdata.length} values in the array`);
// console.log(arrayOfdata.indexOf(23),arrayOfdata.indexOf(23));
// console.log(arrayOfdata[3]);


const add = [2,3,4,5,6,7,8];
const names = ["carl","jack","Zen","lucifer","issei"];

const add2 = (add) => add%2 == 0;

//console.log(add.filter(add2));

const names2 = (len) => len.length<=5;
//console.log(names.filter(names2));
//console.log(names.map(names2));


//console.log(add.map(addfunc=>addfunc+2));

//console.log(names.map(len => len.length));

const remov = (array)=>{
    if(array.length >5){
        console.log("big number");
    }else {
        console.log("small number");
    }
}
//console.log(names.map(remov));



// function addfunc(array){
//     var result=[];
//     for(let i=0; i<array.length; i++ ){
        
//         result.push(array[i]*2);
        
//     }console.log(result);
// }

// addfunc(add);

// const names2 = (len) => len.length<=5;
 //console.log(names.filter(names2));
// console.log(names.map(names2));



const employee = [
    {"name":"Kim", age: 30},
    {"name" : "jack", age : 22},
    {"name":"Zen", age: 25},
    {"name" :"Jonas", age :10}

]

//console.log(employee.filter(ages => ages.age>=25));
//console.log(employee.filter(ages => ages.age<=25));

const num = [2,4,6]

console.log(num.reduce((firstnum, currnum)=> firstnum+currnum));


