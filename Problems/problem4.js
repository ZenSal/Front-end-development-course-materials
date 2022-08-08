//first i need to find the length of string
//need to move the last index postion
//Then need to move last to first and store the value in a variable

function reverse_string(string){
    let new_string="";
    for(i=string.length - 1 ; i >=0 ; i--){
        new_string = string[i];

    }console.log(new_string);
    
}

reverse_string("man");
