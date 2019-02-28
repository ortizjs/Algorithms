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


// var myObject = {
//     foo: "bar",
//     func: function () {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function () {
//             var thiss = this;
//             console.log("inner func:  this.foo = " + thiss.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();