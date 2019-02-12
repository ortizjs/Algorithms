function XO(str) {
    let count = new Object(0);
    let chars = str.toLowerCase().split("");
    for (let i = 0; i < chars.length; i++) {
        if (count[chars[i]]) {
            count[chars[i]] += 1;
        } else {
            count[chars[i]] = 1;
        }
    }
    return count["x"] === count["o"];

}


XO('xo');
XO("xxOo");
XO("xxxm");
XO("Oo");
