

//synchromous code:

console.log("start of the sync progarm");

var x = 10;
var y = 20;

console.log(x+y);
console.log("End of the program");

//Asychornous code

console.log("start of the async progarm");

var a = 10;
var b = 20;

//exceutes a task a certain time settimeout( 'tast', 'time')
setTimeout(()=>{

    console.log(a+b);
}, 2000);


console.log("End of the program");



