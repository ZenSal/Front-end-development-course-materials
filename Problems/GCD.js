
function HdfOrGcd(a,b){
    var low = Math.min(a,b);
    while(low > 0){
        if(a%low == 0 && b%low == 0){
            break;
        }
        low--;

    }
    return low;

}

let a = 96;
let b = 32;
console.log("GCD of ",a," and ",b," is ",HdfOrGcd(a, b));