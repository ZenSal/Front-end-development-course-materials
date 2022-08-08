// class functionAPP{
//     count;
//     constructor(){
//         countofobjects++;

//     }
//     countobject(){
//         console.log("The number of object "+countofobjects);
//     }
//     funcTwo(){
//         console.log("This is a second function");
//     }
//     funcThree(){
//         console.log("This is a third function");
//         console.log(this);
//         // calling another method using same object.
//         this.doLogic2();
//     }
// }

// const obj1 = new functionAPP();
// const obj2 = new functionAPP();
// const obj3 = new functionAPP();
// obj1.countOject();
// obj1.funcTwo();
// obj1.funcThree();

var measureofobj=0;

class functionAPP{

    constructor(){
        measureofobj++;
    }

    countofobjects(){
        console.log("The count of number of objects ="+measureofobj);
        
        
    }
    funcTwo(){
        console.log("This is a second function");
    }
    funcThree(){
        console.log("This is a third function")
        this.funcTwo();
    }
} 

const obj1 = new functionAPP();
const obj2 = new functionAPP();
const obj3 = new functionAPP();
obj1.countofobjects()
obj1.funcThree();






