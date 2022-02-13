import { coinFlip, flipACoin } from "./modules/coin.mjs";
import { createRequire } from 'module'

const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));
args["call"];



const call = args.call;
if (call == "heads" || call == "tails") {
    var results = flipACoin(call);
    console.log(results);
} else {
    console.log("Error: no input")
    console.log("Usage: node guess-flip --call=[heads|tails]")
}

// test