/*Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
- s = '12:01:00PM'
Return '12:01:00'.

- s = '12:01:00AM'
Return '00:01:00'.

Function Description
Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):
-string s: a time in 12 hour format

Returns
string: the time in 24 hour format

Input Format
A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

Constraints
- All input times are valid

Sample Input 0
07:05:45PM

Sample Output 0
19:05:45
*/

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let newHour='';
    let arr=[];
  if (s.includes("PM")) {
    for(let i=0;i<s.length-2;i++){
      arr.push(s[i])
    }
    arr[0]=Number(arr[0])+1
    arr[1]=Number(arr[1])+2
    for(let i=0;i<arr.length;i++){
      newHour=newHour+arr[i]
    }
    return newHour
  } else if (s.includes("AM")) {
    
  }
}
timeConversion("07:05:45PM")