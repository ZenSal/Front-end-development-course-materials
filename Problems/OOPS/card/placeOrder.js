// const cardverify = require("./varifycard") // importing the module from another file

// function placeOrder(){

//     const promise = cardverify.verifyCard(); 
    
//     promise.then(() => {

//         console.log("Ok..")
//         amountDeduct();
//     })

// }

// function amountDeduct(error){

//     if(error){
//         console.log(" please recheck your card...")
//     }
//     else{
//         console.log("Amount has been deducted");
//     }
    
// }

// placeOrder();

//const amount = require("./varifycard");


const amount = require("./varifycard");

function deliveryApp(){

    const prom = amount.placingOrder(); //task1
   //task2

   prom.then(() => {

    console.log("OK..");

    AmountDedcut();

   },
   
   (err) => {

    console.log("Something went wrong..")

   }
   
   )
}



function AmountDedcut(error){

    if(error){
        console.log("Something went wrong..")
    }else{
        console.log("Amount deducted..");
    }
    
}

deliveryApp();


