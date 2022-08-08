


var time = parseFloat(prompt("Enter time(24/7): "));
TimeNow(time);

function TimeNow(){
    if(time >=1 && time <=12 ){
        alert("Good morning !!");
    }
    else if( time >=12 && time <=15){
        alert("Good afternoon!!!");
    }
    else if(time >=15 && time <=18){
        alert("Good evening!!");
    } 
    else if(time >=18 && time <=23){
        alert("Good night!!");
    }
    
    

}