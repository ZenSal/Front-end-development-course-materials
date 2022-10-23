


module.exports.PassVerify = (pass) =>{

    const passProm = new Promise((success, fail) => {
        
        setTimeout(() => {

            try{

                throw new Error("Unexpected error");
                if(pass == "noona"){
                    console.log("Password is sucess");
                    success();
                }else{
                    console.log("Incorrect password");
                    fail();
                }
    
            }catch(ex){

                console.log(ex);
                fail("Failed due to some problem")

            }

            
        },1000);

    });

    return passProm

}