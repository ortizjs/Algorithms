// let permutations = function(array){

// };

// permutations

const helper = (strArr, char) => {
    // strArr = ["ab", "ba"]
    // char = "c"
    // str in each spot on arr

    // return [
    // "abc", "acb", "cab",
    // "bac", "bca", "cba"
    // ]

    let returnArr = [];

    for (let i = 0; i < strArr.length; i++) {
        const currentBaseStr = strArr[i];

        const baseStrArr = currentBaseStr.split("");
        for (let j = 0; j <= baseStrArr.length; j++) {
            const baseStrArrCopy = [...baseStrArr];
            baseStrArrCopy.splice(j, 0, char);
            returnArr.push(baseStrArrCopy.join(""));
        }
    }

    return returnArr;
}

function perms(str) {
    const chars = str.split("");

    let returnArr = [""];

    chars.forEach(char => {
        returnArr = helper(returnArr, char)
    });

    return returnArr;
}

console.log(perms("abcdefg"));