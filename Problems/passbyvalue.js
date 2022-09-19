

function pass(value){
    value+=10;
    return value
}

// const num = 20;
// console.log("before passing the value", num);
// const result=pass(num);
// console.log('result',result);
// console.log("after passing the value", num);

const value = {'name':'Magi', 'age': 25}
let obj = {}
obj = Object.assign(obj, value); // copies the source value to target value{tar,sor}
obj.name='Zen';
console.log(value);
console.log(obj);




