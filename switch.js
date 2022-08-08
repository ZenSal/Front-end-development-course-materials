function Userid(id){

    switch(id){
        case "1":{
            console.log("Welcome user one");
            break;
        }
        case "2":{
            console.log("Welcome user two");
            break;
        }
        case "0":{
            console.log("Welcome Zero!!!");
            break;
        }
        default :{
            console.log("You're not an user :(");
        }

    }

}

Userid("1");
Userid("2");
Userid("3");
Userid("0");
