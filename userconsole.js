var user = prompt("Enter your username:");
var pass = prompt("Enter your password:");

function userconsole(){
    if(user == "Admin" && pass == "admin"){
        alert('Welcome admin!!');
    }
    
    else if(user == "user" && pass == "user"){
        alert("Welcome guest user");
    
    }else{
        alert("Invalid user");
    }

}

