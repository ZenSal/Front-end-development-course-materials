

const inner = function(){
    var name = "magi";
    console.log(name);
    return function inner2(){
        var age = 20; // closure -> the inner function will creates a copy of the parent function value x of it's own scope
        console.log(name+age);
        return "joo";
        
    }
    
}

const result = inner();
const result2 = result();
console.log(result2);





// function add(){
//     var x = 
//     function(){
//         console.log(10);
//         return ;
//     }; return x();
   
// }

// const add2 =  add();

// console.log(add2);


