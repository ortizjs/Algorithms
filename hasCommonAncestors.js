/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. 
The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

var parentChildPairs = [
    [1, 3], [2, 3], [3, 6], [5, 6],
    [5, 7], [4, 5], [4, 8], [8, 10]
];

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:
            
1   2   4
 \ /   / \
  3   5   8
   \ / \   \
    6   7   10

Write a function that takes the graph, as well as two of the individuals in our dataset, as its inputs and returns true if and only if they share at least one ancestor.

Sample input and output:
hasCommonAncestor(parentChildPairs, 3, 8) => false
hasCommonAncestor(parentChildPairs, 5, 8) => true
hasCommonAncestor(parentChildPairs, 6, 8) => true
hasCommonAncestor(parentChildPairs, 1, 3) => false

*/

function hasCommonAncestor(arr, el, el2) {
    let ancesEl = getAncestor(arr, el); {}
    let ancesEl2 = getAncestor(arr, el2); {}

    console.log(ancesEl, ancesEl2);
    for (let key in ancesEl) {
        if (ancesEl2[key]) {
            return true;
        }
    }

    return false;
}

function getAncestor(arr, el) {
    let hsh = {};

    for (let i = 0; i < arr.length; i++) {
        let parent = arr[i][0];
        let child = arr[i][1];
        if (child === el) {
            hsh[parent] = true;
            // return hsh.merge(getAncestor(arr, parent))
        }
    }


    return {
        ...hsh,
        ...getAncestor(arr, parent)
    }
    return hsh;
}


var parentChildPairs = [
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [8, 10]
];


console.log(hasCommonAncestor(parentChildPairs, 6, 8))















function findNodesWithZeroAndOneParents(arr) {
    let zeroParents = {};
    let oneParent = {};

    for (let i = 0; i < arr.length; i++) {
        let parent = arr[i][0];
        let child = arr[i][1];

        zeroParents[child] = false;

        if (zeroParents[parent] !== false) {
            zeroParents[parent] = true;
        }

        if (oneParent[child] !== undefined) {
            oneParent[child] = false;
        } else {
            oneParent[child] = true;
        }
    }

    // console.log(zeroParents, oneParent)
    let zeroParArr = Object.keys(zeroParents).filter(el => zeroParents[el])
    let oneParArr = Object.keys(oneParent).filter(el => oneParent[el])

    return [zeroParArr, oneParArr];
}

// console.log(findNodesWithZeroAndOneParents(parentChildPairs))