// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.

 

// Example 1:

// Input: 1
// Output: "1"
// Example 2:

// Input: 4
// Output: "1211"
var countAndSay = function(n) {
  let result = "";
  let counter = 0;
  let prev = "1";
    let i = 2;
    while (i <= n) {
      let result = ""
      for (let k = 0; k < prev.length; k++){
        let char = prev[k];
        counter += 1;
        if (char !== prev[k + 1]){
          result += counter;
          result += prev[k];
          counter = 0;
        }
      }
      i++;
      prev = result;
    }
  return prev;
};
// countAndSay(1);
// countAndSay(2);
countAndSay(4)