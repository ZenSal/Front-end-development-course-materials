var add = function (a,b){              ///storing a function inside a variable
    console.log(a+b);                   //function expression
}
console.log(typeof add);

function addandprint(funadd, message){
    funadd(5,6);
    console.log(message);
}

addandprint(add, "hello");

add(9,10); //function hoisting -> calling a function before creating a function

function add(a,b){
    console.log(a+b);

}