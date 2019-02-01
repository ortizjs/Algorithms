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

var maxProfit = function (prices) {
    let buyVal = prices[0];
    let sellVal;
    let profit = 0;
    for (i = 1; i < prices.length; i++) {
        let ele = prices[i];
        let currentProfit = ele - buyVal;
        if (currentProfit > profit) {
            profit = currentProfit;
            sellVal = ele;
        }
        if (ele < buyVal) {
            buyVal = ele;
        }
    }
    return profit;
};

var maxProfit = function (prices) {
    let buyVal = prices[0];
    let sellVal;
    let profit = 0;
    let i = 1;
    while (i < prices.length) {
        let ele = prices[i];
        let currentProfit = ele - buyVal;
        if (currentProfit > profit) {
            profit = currentProfit;
            sellVal = ele;
        }
        if (ele < buyVal) {
            buyVal = ele;
        }
        i++;
    }
    return profit;
};

maxProfit([7, 1, 5, 3, 6, 4]);