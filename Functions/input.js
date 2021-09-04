function input(){
    const chalk = require('chalk');
    
    console.log(chalk.bold("Slasher Setup"))
    console.log(chalk.bold("-------------"))
    
    
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
    

    

    readline.question(`Bot Token: `, token => {
     
       
    readline.question(`Bot Status: `, status => {
      
    
    
    console.log(chalk.bold("-------------"))
    console.log(chalk.bold.green("Setup Complete"))
    readline.close();
    
    const complete = require('./complete.js');

    complete(token, status)
    
    })
    })
    }
    module.exports = input;