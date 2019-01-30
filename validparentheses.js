// var isValid = function (s) {
//     if (s.length === 0) {
//         return true;
//     };
//     for (let i = 0; i < s.length; i++) {
//         for (let j = s.length - 1; i >= 0; j--) {
//             if (s[i] !== s[j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };

/*
 @param {string} s
 @return {boolean}
 */
var isValidrec = function(s){
    if (s === "") return true;
    if (s.length === 1) return false;
    let hash = { '(': ')', '{': '}', '[': ']'};

    let startIdx;
    let closeBracket; 
    let result;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (hash[char] && !startIdx) {
            startIdx = i;
            closeBracket = hash[char];
        }
        if (result !== undefined && result == false) {
            return false;
        }
        if (char === closeBracket) {
            str = s.slice(startIdx + 1, i);
            result = isValidrec(str);
        }
    }
    return result;
};

var isValid = function (s) {
    if (s.length === 0) {
        return true;
    }
    let keys = { '(': ')', '{': '}', '[': ']' };
    let open = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (keys[char] === undefined && open.length === []) {
            return false;
        }
        if (keys[char]) {
            open.push(char)
        } else {
            let currentOpen = open.pop()
            if (keys[currentOpen] !== char) {
                return false;
            }
        }
    }
    if (open.length === 0) {
        return false;
    } else {
        return true;
    }
};

isValid("()[]{}");
