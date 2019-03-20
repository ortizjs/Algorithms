var transpose = function (A) {
    let result = new Array(A.length[0]);
    for (let row = 0; row < A[0].length; row++) {
        result[row] = new Array(A.length);
        for (let col = 0; col < result[row].length; col++) {
            result[row][col] = A[col][row];
        }
    }
    return result;
};