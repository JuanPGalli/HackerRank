/*You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example
candles = [4,4,1,3]

The maximum height candles are 4 units high. There are 2 of them, so return 2.

Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights
Returns

int: the number of candles that are tallest
Input Format

The first line contains a single integer, n, the size of candles[].
The second line contains n space-separated integers, where each integer i describes the height of candles[i].

Constraints

Sample Input 0

4
3 2 1 3
Sample Output 0

2
Explanation 0

Candle heights are [3,2,1,3]. The tallest candles are 3 units, and there are 2 of them.*/

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
  //candles.sort((a, b) => a - b) // Reordenar el array genera un complejidad O(n log n)
  let maxHeight = Math.max(...candles); //Tomando el mayor y comparando obtenemos una complejidad O(n). Serían dos iteraciones.
  let tallest = 0;
  for (let i = 0; i < candles.length; i++){
    if(candles[i]===maxHeight) tallest++
  }
  return tallest;
}
console.log(birthdayCakeCandles([3, 2, 1, 3]));