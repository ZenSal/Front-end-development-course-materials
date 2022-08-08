
function NAh(a,b,c){
    //return  a>b ? a>c ?  "A is largest" : "C is largest" : "B is largest"    // condtional expression ? statement 1 : statement
                            //if                                        //else
    return a>b && a>c ? "A is largest" : b>a && b>c ? "B is largest" : "C is largest";
}

console.log(NAh(165,25,332));
console.log(NAh(2,1,3));
console.log(NAh(3,2,1));

