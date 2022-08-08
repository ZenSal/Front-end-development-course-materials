

function playtime(temperature,climate){
    if (temperature >=20 && temperature <=25 && climate == true){
        
        console.log("Go out and play in the school ground :)");
        

    }else if(temperature >=18 && temperature <=20 && climate != true){
        
        console.log("Don't dare to come out !!!!");
        
    }else{
        console.log("Check the temperature again!!!");
    }

}
playtime(23,true);
playtime(19,false);
playtime(35,true);

