// Given a 2 d grid map of '1'
// s(land) and '0'
// s(water), count the number of islands.An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input:
// 11110
// 11010
// 11000
// 00000
// Output: 1

// Example 2:
// Input:
// 11000
// 11000
// 00100
// 00011
// Output: 3

var numIslands = function (grid) {
    let islands = 0;
    let startIdx;
    let endIdx;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) {
                continue;
            } else if (grid[i][j] === 1 && !startIdx) {
                startIdx = [i, j];
            } else if (grid[i][j] === 1 && startIdx) {
                endIdx = [i, j];
                let inc = true;
                let k = 0;
                while (k <= end) {
                    if (grid[i + 1][k] === 1) {
                        inc = false;
                        break;
                    }
                    k++;
                }
                if (inc) {
                    islands++;
                }
                startIdx = undefined;
                endIdx = undefined;
            }
        }
    }
    return islands;

};