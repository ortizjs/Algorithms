// var spellchecker = function (wordlist, queries) {
//     let result = [];
//     for (let i = 0; i < queries.length; i++) {
//         if (wordlist.indexOf(queries[i]) !== -1) {
//             result.push(queries[i]);
//         } else {
//             result.push(null);
//         }
//     }

//     for (let j = 0; j < result.length; j++) {
//         if (result[j] !== null) {
//             continue;
//         } else {
//             let wordlist2 = wordlist.map(word => word.toLowerCase());
//             let index = wordlist2.indexOf(queries[j].toLowerCase());
//             if (index !== -1) {
//                 result[j] = wordlist[index];
//                 continue;
//             } else {
//                 let novowels = wordlist2.map(word2 => word2.replace(/[aeiou]/ig, '-'));
//                 let newword = queries[j].toLowerCase().replace(/[aeiou]/ig, '-')
//                 let index2 = novowels.indexOf(newword);
//                 if (index2 !== -1) {
//                     result[j] = wordlist[index2];
//                     continue;
//                 } else {
//                     result[j] = "";
//                 }
//             }
//         }
//     }
//     return result;
// };
var spellchecker = function (wordlist, queries) {
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        if (wordlist.indexOf(queries[i]) !== -1) {
            result.push(queries[i]);
            continue;
        }

        let wordlist2 = wordlist.map(word => word.toLowerCase());
        let index = wordlist2.indexOf(queries[i].toLowerCase());
        if (index !== -1) {
            result.push(wordlist[index]);
            // continue;
        } else {
            let novowels = wordlist2.map(word2 => word2.replace(/[aeiou]/ig, '-'));
            let newword = queries[i].toLowerCase().replace(/[aeiou]/ig, '-')
            let index2 = novowels.indexOf(newword);
            if (index2 !== -1) {
                result.push(wordlist[index2]);
                // continue;
            } else {
                result.push("");
            }
        }
    }
    return result;
};

