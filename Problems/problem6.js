let count =1;
let count2 =1; 

for(let i=0; i<=1; i++){
    console.log("Outer loop"  +i);
    for(let j=0; j<=1; j++){
        console.log("Inner loop"+count++);
        for(z=0; z<=1; z++){
            console.log("Inner2 loop" +count2++);
            
        }
    }
}