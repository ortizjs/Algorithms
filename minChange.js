const minChange = function (coins, target) {
    // coins = coins.sort((a,b) => b-a);
    let s = new Set(coins);
    let counter = 2;
    let currentSum;
    while (true) {
        let newSet = new Set();
        for (let i = 0; i < coins.length; i++) {
            let c = coins[i];
            for (let coin of s) {
                currentSum = c + coin;
                if (currentSum === target) return counter
                if (currentSum < target) {
                    newSet.add(currentSum)
                }
                // console.log(newSet)
            }
        }
        counter += 1;
        s = newSet;
        if (newSet.size === 0) return false;
    }
}

// minChange([1,2,5], 11) // 3 because 5 + 5 + 1 = 11
// minChange([1,4,5], 8)  // 2 because 4 + 4 = 8
// minChange([1,5,10, 25], 15) // 2 because 5 + 10 = 25
minChange([1, 5, 10, 25], 100) // 4 because 25 + 25 + 25 + 25= 100
// minChange([20,20,20,20], 11) // 4 because 25 + 25 + 25 + 25= 100