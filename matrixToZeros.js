var setZeroes = function (matrix) {
    let h = matrix.length;
    let w = matrix[0].length;
    let rowZeros = new Array(h);
    let colZeros = new Array(w);
    for (let row = 0; row < h; row++) {
        for (let col = 0; col < w; col++) {
            let ele = matrix[row][col];
            if (ele === 0) {
                rowZeros[row] = true;
                colZeros[col] = true;
            }
        }
    }
    for (let r = 0; r < h; r++) {
        for (let c = 0; c < w; c++) {
            if (rowZeros[r] || colZeros[c]) {
                matrix[r][c] = 0;
            }
        }
    }
    return matrix;
};