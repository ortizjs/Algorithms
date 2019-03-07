var addToArrayForm = function (A, K) {
    let B;
    let sum;
    if (K === 0) return A;
    if (A[A.length - 1]) {
        sum = A[A.length - 1] + K; //811 // 82 // 10
    } else {
        sum = K
    }
    K = Math.floor(sum / 10); // 81 // 8 // 1 // 
    let last = sum % 10; // 1 // 2 // 0
    console.log(last)
    B = A.slice(0, A.length - 1) // [2,1] // [2] // []
    return addToArrayForm(B, K).concat([last]); // [2,1] + [1] // [2] + [2] + [1] // [] + [0] + [2] + [1]


};
// addToArrayForm([1,2,0,0],34);
addToArrayForm([2, 1, 5], 806);