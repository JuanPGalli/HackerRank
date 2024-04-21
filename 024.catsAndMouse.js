/*
Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C. Complete the function catAndMouse to return the appropriate answer to each query, which will be printed on a new line.
- If cat A catches the mouse first, print Cat A.
- If cat B catches the mouse first, print Cat B.
- If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

Example
x=2
y=5
z=4

The cats are at positions 2 (Cat A) and 5 (Cat B), and the mouse is at position 4. Cat B, at position 5 will arrive first since it is only 1 unit away while the other is 2 units away. Return 'Cat B'.

Function Description
Complete the catAndMouse function in the editor below.
catAndMouse has the following parameter(s):
- int x: Cat A's position
- int y: Cat B's position
- int z: Mouse C's position

Returns
- string: Either 'Cat A', 'Cat B', or 'Mouse C'

Input Format
The first line contains a single integer, q, denoting the number of queries.
Each of the q subsequent lines contains three space-separated integers describing the respective values of x (cat A's location), y (cat B's location), and z (mouse C's location).

Constraints
- 1 <= q <= 100
- 1 <= x,y,z <= 100

Sample Input 0
2
1 2 3
1 3 2

Sample Output 0
Cat B
Mouse C
Explanation 0
Query 0: The positions of the cats and mouse are shown below: image

           Cat B
|0|---|1|---|2|---|3|---|4|--->
     Cat A      Mouse C

Cat B will catch the mouse first, so we print Cat B on a new line.
Query 1: In this query, cats A and B reach mouse C at the exact same time: image

           Mouse C
|0|---|1|---|2|---|3|---|4|--->
     Cat A       Cat B

Because the mouse escapes, we print Mouse C on a new line.
*/

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  if (x - z < 0) x = (x - z) * -1
  else x = x - z;
  if (y - z < 0) y = (y - z) * -1
  else y = y - z;
  if (x < y) return ("Cat A");
  else if (x > y) return ("Cat B");
  else if(x===y) return ("Mouse C");
}
console.log(catAndMouse(2,5,4))//Cat B
console.log(catAndMouse(1,2,3))//Cat B
console.log(catAndMouse(1, 3, 2))//Mouse C

// ChatGPT optimized solution:
/*
function catAndMouse(x, y, z) {
    const distA = Math.abs(x - z);
    const distB = Math.abs(y - z);
    if (distA < distB) return "Cat A";
    else if (distA > distB) return "Cat B";
    else return "Mouse C";
}
console.log(catAndMouse(2, 5, 4)); // Cat B
console.log(catAndMouse(1, 2, 3)); // Cat B
console.log(catAndMouse(1, 3, 2)); // Mouse C
*/