/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */


export function coinFlip() {
  let randomNum = Math.random()
  if (randomNum < .5){
    return "tails"
  } else{
    return "heads"
  }
}

 function anotherFlip() {
  let randomNum = Math.random()
  if (randomNum < .5){
    return "tails"
  } else{
    return "heads"
  }
}
//console.log(coinFlip)

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

var coinArray = new Array()
export function coinFlips(flips) {
  var headCount = 0
  var tailCount = 0
  for (let i=0; i < flips; i++) {
    coinArray[i] = coinFlip()
    if (coinArray[i] == "heads") {
      headCount++
    } else {
      tailCount++
    }
  }

  return coinArray 
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  var headCount = 0;
  var tailCount = 0;
  for (let i=0; i < array.length; i++) {
    if (coinArray[i] == "heads") {
      headCount++
    } else {
      tailCount++
    }
  }
  if (headCount ==0) {
    return "{ tails: " + tailCount + " }"
  }
  if (tailCount ==0) {
    return "{ heads: " + headCount + " }"
  }
  return "{ tails: " + tailCount + ", heads: " + headCount + " }"
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  var coinFlip = anotherFlip();
  if (coinFlip == call) {
    return "{ call: '" + call + "', flip: '" + coinFlip + "', result: 'win' }"
  } else {
    return "{ call: '" + call + "', flip: '" + coinFlip + "', result: 'lose' }"
  }
}
// test

/** Export 
 * 
 * Export all of your named functions
*/