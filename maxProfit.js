var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let current = prices[j] - prices[i]
            if (current > profit) {
                profit = current;
            }
        }
    }
    return profit;
};

maxProfit([7, 1, 5, 3, 6, 4]);