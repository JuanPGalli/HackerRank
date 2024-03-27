/*
There will be two arrays of integers.Determine all integers that satisfy the following two conditions:

1. The elements of the first array are all factors of the integer being considered
2. The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

Example
a = [2,6]
b = [24,36]

There are two numbers between the arrays: 6 and 12.
6%2=0, 6%6=0, 24%6=0 and 36%6=0 for the first value.
12%2=0, 12%6=0 and 24%12=0, 36%12=0 for the second value. Return 2.

Function Description
Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

getTotalX has the following parameter(s):
- int a[n]: an array of integers
- int b[m]: an array of integers

Returns
- int: the number of integers that are between the sets

Input Format
The first line contains two space-separated integers, n and m, the number of elements in arrays a and b.
The second line contains n distinct space-separated integers a[i] where 0<=i<n.
The third line contains m distinct space-separated integers b[j] where 0<=j<m.

Constraints
- 1<=n,m<=10
- 1<=a[i]<=100
- 1<=b[j]<=100

Sample Input
2 3
2 4
16 32 96

Sample Output
3

Explanation
2 and 4 divide evenly into 4, 8, 12 and 16.
4, 8 and 16 divide evenly into 16, 32, 96.
4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.
*/

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
  let countFactor = 0;
  let isFactor = false
  for (let i = a[a.length - 1]; i <= b[0]; i++){
    for (let j = 0; j < a.length; j++){
      if (i % a[j] !== 0) {
        isFactor = false;
        break; // Salir del bucle si un número no es un factor
      } 
      else {
        isFactor = true;
      };
    };
    if (isFactor) {
      for (let k = 0; k < b.length; k++){
        if (b[k] % i !== 0) {
          isFactor = false;
          break; // Salir del bucle si un número no es un factor
        }
      }
    }
    if (isFactor) {
      countFactor = countFactor + 1
    }
    isFactor = false;
  }
  return countFactor;
}
console.log(getTotalX([2, 4], [16, 32, 96]));