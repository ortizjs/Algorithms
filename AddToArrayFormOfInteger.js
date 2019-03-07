// var addToArrayForm = function (A, K) {
    // let B;
    // let sum;
    // if (K === 0) return A;
    // if (A[A.length - 1]) {
    //     sum = A[A.length - 1] + K; //811 // 82 // 10
    // } else {
    //     sum = K
    // }
    // K = Math.floor(sum / 10); // 81 // 8 // 1 // 
    // let last = sum % 10; // 1 // 2 // 0
    // console.log(last)
    // B = A.slice(0, A.length - 1) // [2,1] // [2] // []
    // return addToArrayForm(B, K).concat([last]); // [2,1] + [1] // [2] + [2] + [1] // [] + [0] + [2] + [1]

    // let number = "";
    // for (let i = A.length - 1; i >= 0; i--) {
    //     let current = A[i];
    //     number = current + number;
    // }
    // number2 = parseInt(number);
    // let sum = number2 + K;
    // let n = sum.toString().split("")
    // return n;

    // let carry = K;
    // let sum = 0;
    // let i = A.length - 1;
    // while (carry) {
    //     if (i >= 0) { // 2 // 1 // 0 // -1
    //         sum = A[i] + carry; // 811 // 82 // 10 // 
    //         carry = Math.floor(sum / 10); // 81 // 8 // 1 // 
    //         A[i] = sum % 10; // [2,1,1] // [2,2,1] // [0,2,1]
    //     } else { // -1
    //         console.log(carry)
    //         A.unshift(carry);
    //         // sum = carry;
    //         carry = 0;
    //     }
    //     i--;
    // }
    // return A;
// };

var addToArrayForm = function (A, K) {
    let sum = 0;
    let i = A.length - 1;
    while (K > 0) {
        if (i >= 0) {
            sum = A[i] + K;
            K = Math.floor(sum / 10);
            A[i] = sum % 10;
        } else {
            A.unshift(K % 10)
            K = Math.floor(K / 10);
        }
        i--;
    }
    return A;
};

addToArrayForm([1,2,0,0],34);
addToArrayForm([2, 1, 5], 806);