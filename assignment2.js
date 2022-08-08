var a = prompt("Enter the value of a:");
var b = prompt("Enter the value of b:");

oper = prompt("Enter the method of calculation:(+,-,*,/)");

function addition(){
    add = a+b;
    console.log(add);
}

function subtraction(){
    sub = a-b;
    console.log(sub);

}

function Multiplication(){
    Mul = a*b;
    console.log(Mul);
}

function division(){
    div = a/b;
    console.log(div);
}

if(oper == "+" ){
    addition();
}
else if(oper == "-"){
    subtraction();
}
else if(oper == "*"){
    Multiplication();
}
else if(oper == "/"){
    division();
}else{
    console.log("Invalid");
}

