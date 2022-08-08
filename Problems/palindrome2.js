
function palindrome(){
    for(let i=0; i<=50; i++){
        let a = parseInt(i/10);
        console.log(`The value of a is ${a}`);
        if(i<10){
            console.log(i, "");
    
        }else if(i/a == 11) {
            console.log(i, "");
    
        }
    }

}
palindrome();
