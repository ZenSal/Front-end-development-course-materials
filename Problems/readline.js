
const readline =  require("readline") // import a library  to read from the terminal.

const readline2=readline.createInterface({ //create a interface to read from the terminal
    input : process.stdin,
    output : process.stdout
})

const ans= function(answer){
    console.log(answer);
    readline2.close();
}

readline2.question("Enter your name :",ans);



