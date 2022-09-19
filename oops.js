class mydetails{

    constructor(name, age){
        this.name=name;
        this.age=age
    }

    Myinterest(){
        console.log("I like to watch anime" + this.name)
    }

    MyGoal(){
        console.log("To get paid well to get anything" + this.name);
    }
}

const MagiObj = new mydetails("Magesh",25);
//MagiObj.Myinterest();

const ZenObj = new mydetails("Zen",25);
//ZenObj.MyGoal();

console.log(MagiObj instanceof mydetails);
console.log(MagiObj);
//console.log(mydetails);

const jsonMagi = JSON.stringify(MagiObj); // converts object to json object 
console.log(jsonMagi);
console.log(jsonMagi instanceof mydetails);

const student = {
    "name" : "Zen",
    "Age" : "25"
}

console.log(student);

const jsonMagiToObj = JSON.parse(jsonMagi);
console.log(jsonMagi);


