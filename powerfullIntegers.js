var powerfulIntegers = function (x, y, bound) {
    let powers = [];
    for (let i = 0; (Math.pow(x, i) < bound); i++) {
        for (let j = 0; (Math.pow(y, j) < bound); j++) {
            let xsum = Math.pow(x, i);
            let ysum = Math.pow(y, j);
            let totalsum = xsum + ysum
            if (totalsum <= bound && !powers.includes(totalsum)) {
                powers.unshift(totalsum);
                //  console.log(totalsum);
            }
        }
    }

    return powers.sort((a, b) => a - b);
};