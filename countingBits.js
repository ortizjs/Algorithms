// Given a non negative integer number num.For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

// Example 1:

// Input: 2
// Output: [0, 1, 1]
// Example 2:

// Input: 5
// Output: [0, 1, 1, 2, 1, 2]
// Follow up:

// It is very easy to come up with a solution with run time O(n * sizeof(integer)).But can you do it in linear time O(n) / possibly in a single pass ?
//     Space complexity should be O(n).
// Can you do it like a boss ? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.

// var countBits = function (num) {
//     let result = [];//011212
//     let power = 0; // 3
//     let previous = 0;//2/4
//     let i = 0; //1/2/3/4/5
//     while (i <= num) {
//         let target = 2 ** power; // 8

//         if (i === target) {
//             previous = target; //
//             result.push(1);
//             power += 1;
//         } else {
//             let different = i - previous // 1
//             if (result[previous]) {
//                 let current = result[previous] + result[different]  // 1 + 1 = 2
//                 result.push(current);
//             } else {
//                 result.push(0)
//             }
//         }

//         i++;
//     }
//     return result;
// };

var countBits = function (num) {
    let result = [];
    let power = 0;
    let i = 0;
    let prev = 0;
    while (i <= num) {
        let target = 2 ** power;
        if (i === target) {
            result.push(1);
            prev = target;
            power += 1;
        } else {
            if (result[prev]) {
                result.push(result[prev] + result[i - prev])
            } else {
                result.push(0);
            }
        }
        i++;
    }
    return result;
};