
const server = require("./passServer");


function PassAuth(){

    const auth = server.PassVerify("noon");

    auth.then(() => {

        console.log("successfully authorized")
        Logged()

    },
    (err) => {

        console.log(err);
    }

    )

}

function Logged(){

    console.log("welcome");
}

PassAuth();
