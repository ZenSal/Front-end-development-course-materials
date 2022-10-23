
// // exporting the module
// module.exports.verifyCard= (callBack)=>{

//     const cardPromise = new Promise((success, failure) => {
//         setTimeout(()=>{
//             console.log("Card verified..");
//             success();
//         },3000);
//     });
//     return cardPromise
    
// }

module.exports.placingOrder = (cb)=>{


    const orderPromise = new Promise((success, failed) => {
        setTimeout(()=>{
        
            console.log("outofStock");
            //success();
            failed("Order not available")
            
        },4000);
    });

    return orderPromise
    
    
    
}
