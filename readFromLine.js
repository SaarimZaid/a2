const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('Please enter your name: ', function(ans){
    console.log(`Hello ${ans}`);
    rl.close();
})