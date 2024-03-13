// 1. FizzBuzz
// Given a numer n, fot each integer i in the range from 1 to n inclusive, print one value per line as follows:
// if i is a multiple of both 3 and 5, print FizzBuzz.
// if i is a multiple of 3 (but not 5), print Fizz.
// if i is a multiple of 5 (but not 3), print Buzz.
// if i is not a multiple 



'use strict';


/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz");
        } else if (i % 3 !== 0 && i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

}


fizzBuzz(15);


