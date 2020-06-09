// coding demo on process.argv - uses loggerFactory

const lf = require('./loggerFactory');
logger = lf();

let [nodeExec, thisScript, ...cmdArgs] = process.argv;

logger(`node is ${nodeExec}`);
logger(`this is ${thisScript}`);
logger(`cmdArgs are ${cmdArgs}`);

// if a particular number of parameters is expected, do some simple validation
if (cmdArgs.length != 3){
  console.log('usage: args <target> <oldStr> <newStr>');
  // we can't continue, so exit
  logger('exiting: incorrect number of arguments', cmdArgs);
  process.exit(1);
}

logger("okay, let's do this!");
// functional body of the program goes here...
