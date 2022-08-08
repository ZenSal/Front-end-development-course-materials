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
MagiObj.Myinterest();

const ZenObj = new mydetails("Zen",25);
ZenObj.MyGoal();


