// var isPalindrome = function(s) {
//     if (s.length === 0) {
//         return true;
//     }
//     let str1 = "";
//     let str2 = "";
//     let nonChars = [",", ".", ":",";", "'", "`", " "];
//     let i = 0;
//     let j = s.length - 1;
//     while (j >= 0) {
//       if (!nonChars.includes(s[i])) {
//           str1 += s[i].toLowerCase();
//       }
//       if (!nonChars.includes(s[j])){
//           str2 += s[j].toLowerCase();
//       }
//       j -= 1;
//       i++;

//     }
//     console.log(str1)
//     console.log("")
//     console.log(str2)
//     return str1 === str2;

// };

// var isPalindrome = function (s) {
//     if (s.length === 0) {
//         return true;
//     }
//     let str1 = "";
//     let str2 = "";
//     let alphabet = "abcdefghijklmnopqrstuvxywz0123456789";
//     let i = 0;
//     let j = s.length - 1;
//     while (j >= 0) {
//         if (alphabet.includes(s[i].toLowerCase())) {
//             str1 += s[i].toLowerCase();
//         }
//         if (alphabet.includes(s[j].toLowerCase())) {
//             str2 += s[j].toLowerCase();
//         }
//         j -= 1;
//         i++;
//         console.log(str1)
//         console.log("")
//         console.log(str2)

//     }

//     return str1 === str2;

// };


// var isPalindrome = function (s) {
//     if (s.length === 0) {
//         return true;
//     }
//     let str1 = "";
//     let str2 = "";
//     let alphabet = "abcdefghijklmnopqrstuvxywz0123456789";

//     let i = 0;
//     s = s.toLowerCase()
//     while (i < s.length) {
//         if (alphabet.includes(s[i])) {
//             str1 += s[i];
//             str2 = s[i] + str2;
//         }
//         i++;
//     }

//     return str1 === str2;

// };

var isPalindrome = function (s) {
    if (s.length === 0) {
        return true;
    }
    let str1 = "";
    let str2 = "";
    let i = 0;
    s = s.toLowerCase();
    while (i < s.length) {
        if (s[i].match(/^[a-z0-9]+$/i)) {
            str1 += s[i];
            str2 = s[i] + str2;
        }
        i++;
    }

    return str1 === str2;

};

// isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("0P");