const { Console } = require("console");


class customer { // creating a blue print

    //properties
    name=""; 
    age="";
    email="";

    // used to assign the value to the properties
    constructor(_name,_age,_email){
        this.name= _name;
        this.age = _age;
        this.email= _email;
    }

    
    //methods
    book_room(){

        console.log(this)
        //console.log("Room is booked under the name of :" +this.name);

    }

    
}

class services extends customer{

    food="";
    beverages="";

    constructor (_name,_age,_email,_food,_beverages){
        console.log("Child class...")
        super(_name,_age,_email)
        this.food=_food;
        this.beverages=_beverages
        console.log(this.food)
    }

    service(){
        console.log("services are provided...")
    }

}

class roomType extends services{

    beds =""

    constructor(_name,_age,_email,_food,_beverages,_beds){
        super(_name,_age,_email,_food,_beverages)
        this.beds=_beds
    }

    service(){
        super.service();
        console.log("Sleepwell")
    }
}

//creating a new object from the class 

// var customer1 = new services("zen",25,"noname@gmai.com","meals","soft drinks");
// customer1.service()

var customer2 = new roomType("zen",25,"noname@gmai.com","meals","soft drinks","2bhk");
customer2.service()


