// Import the coinFlip function from your coin.mjs file
import { coinFlips, countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module'

const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));
args["number"];



const number = args.number || 1;

var coinArray = coinFlips(number);
console.log(coinArray);
console.log(countFlips(coinArray));