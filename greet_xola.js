const greet = require('./greet')
const chalk = require('chalk')
var figlet = require('figlet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));

figlet(styledMessage, function(err, data){
    if (err){
        console.log('Something went wrong...');
        console.dir(err);
        return;
    } else{
        console.log(data+"\n")
    }
})

const styledMessage1 = chalk.bgRedBright.white(greet("Mcebo"));
console.log(styledMessage)
console.log(styledMessage1)