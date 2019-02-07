var romanToInt = function (s) {
    let bases = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let subs = {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        let num = s[i];
        let nums = s.slice(i, i + 2)
        if (subs[nums] == undefined) {
            sum += bases[num]
        } else {
            sum += subs[nums];
            i += 1
        }
    }
    return sum;
};