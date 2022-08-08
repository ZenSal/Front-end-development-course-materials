function palindrome(num){
    var sum=0
    var x; 
    var original=num;
    while(num > 0){
        x = num%10; // 14
        //console.log(x);
        sum = sum*10 + x; // 1
        //console.log(sum); //1
        num = parseInt(num/10); //14
        console.log(num);
    }
    if(original == sum){ 
        console.log("palandrome");
        //console.log(original);
        

    }else {
        console.log("not");
    }
}

palindrome(22)


// var num2 = 141;
// console.log(num2%10);
// console.log(parseInt(num2/10));