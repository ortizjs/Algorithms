// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

//     Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

//     Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

//     Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke"
// is a subsequence and not a substring.

var lengthOfLongestSubstring = function (s) {
    let result = 0
    let longest = new Set();
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        while (longest.has(char)) {
            startLet = s[start];
            longest.delete(startLet);
            start++
        }
        longest.add(char)
        end++
        if (result < (end - start)) {
            result = end - start
        }
    }
    return result
};