var isPalindrome = function (x) {
    let rev = [];
    num = x.toString().split("");
    for (let i = num.length - 1; i >= 0; i--) {
        rev.push(num[i]);
    }
    console.log(rev.join(""));
    return rev.join("") == x;
};