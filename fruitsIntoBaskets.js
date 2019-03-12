// In a row of trees, the i - th tree produces fruit with type tree[i].

// You start at any tree of your choice, then repeatedly perform the following steps:

//     Add one piece of fruit from this tree to your baskets.If you cannot, stop.
// Move to the next tree to the right of the current tree.If there is no tree to the right, stop.
// Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

// You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

// What is the total amount of fruit you can collect with this procedure ?



//     Example 1 :

//     Input: [1, 2, 1]
// Output: 3
// Explanation: We can collect[1, 2, 1].
// Example 2:

//     Input: [0, 1, 2, 2]
// Output: 3
// Explanation: We can collect[1, 2, 2].
// If we started at the first tree, we would only collect[0, 1].
// Example 3:

//     Input: [1, 2, 3, 2, 2]
// Output: 4
// Explanation: We can collect[2, 3, 2, 2].
// If we started at the first tree, we would only collect[1, 2].
// Example 4:

//     Input: [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
// Output: 5
// Explanation: We can collect[1, 2, 1, 1, 2].
// If we started at the first tree or the eighth tree, we would only collect 4 fruits.


// Note:

//    1) 1 <= tree.length <= 40000
//    2) 0 <= tree[i] < tree.length


// var totalFruit = function (tree) {
//     // if (tree.length <= 1) return 1;
//     let max = 0;
//     let b1 = [];
//     let b2 = [];
//     for (let i = 0; i < tree.length; i++) {
//         for (let j = i; j < tree.length; j++) {
//             let char = tree[j];
//             if (b1.length === 0 || b1[0] === char) {
//                 b1.push(char);
//             } else if (b2.length === 0 || b2[0] === char) {
//                 b2.push(char)
//             } else {
//                 break;
//             }
//         }
//         if (b1.length + b2.length > max) max = (b1.length + b2.length);
//         b1 = [];
//         b2 = [];
//         // i++;
//         if (tree[i + 1] === tree[i]) {
//             continue;
//         }
//     }
//     return max;
// };
var totalFruit = function (tree) {
    let type1;
    let type2;
    let count1 = 0;
    let count2 = 0;
    let cont = 0;
    let max = 0;
    for (let i = 0; i < tree.length; i++) {
        let ele = tree[i];
        if (type1 === undefined || ele === type1) {
            type1 = ele;
            count1 += 1;
        } else if (type2 === undefined || ele === type2) {
            type2 = ele;
            count2 += 1;
        } else {
            type1 = tree[i - 1];
            count1 = cont;
            type2 = ele;
            count2 = 1;
        }
        if ((count1 + count2) > max) max = count1 + count2;
        if (ele === tree[i - 1]) {
            cont++;
        } else {
            cont = 1;
        }
    }
    return max;
};