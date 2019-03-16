var minChange = function(coins, amount) {
    if (amount === 0) return 0;
    if (coins.length === 1 && amount === coins[0]) return amount;
    if (coins.includes(amount)) return 1;
    let cointSet = new Set(coins);
    let count = 2;
    let currentSum;
    while(true){
        let newSet = new Set();
        for (let i = 0; i < coins.length; i++) {
            let c = coins[i];
            for (let coin of cointSet){
                currentSum = coin + c;
                if (currentSum === amount) return count; 
                if (currentSum < amount) newSet.add(currentSum);
            }
        }
        count += 1;
        cointSet = newSet;
        if (newSet.size === 0) return -1;
    }
};

// minChange([1,2,5], 11) // 3 because 5 + 5 + 1 = 11
// minChange([1,4,5], 8)  // 2 because 4 + 4 = 8
// minChange([1,5,10, 25], 15) // 2 because 5 + 10 = 25
minChange([1, 5, 10, 25], 100) // 4 because 25 + 25 + 25 + 25= 100
// minChange([20,20,20,20], 11) // 4 because 25 + 25 + 25 + 25= 100