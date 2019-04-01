// Given a non - empty string s and a dictionary wordDict containing a list of non - empty words, determine
// if s can be segmented into a space - separated sequence of one or more dictionary words.

// Note:

//     The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

//     Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode"
// can be segmented as "leet code".
// Example 2:

//     Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple"
// can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

//     Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

/*
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let result = new Array(s.length + 1).fill(false);
    result[0] = true;
    for (let i = 0; i < result.length; i++) {
        if (result[i] === false) continue;
        for (let j = i + 1; j < result.length; j++) {
            let word = s.slice(i, j);
            if (wordDict.includes(word)) {
                result[j] = true;
            }
        }
    }
    return result[result.length - 1];
};