let alerter = function (arr, k, y) {
    let maxAverage = 0;
    let minAverage;
    let maxTime = 0;
    let averages = [];
    let sum = 0;
    let l = arr.length - k;
    for (i = 0; i <= l; i++) {
        sum = 0;
        for (j = i; j < i + k; j++) {
            sum += arr[j];
            if (arr[j] > maxTime) maxTime = arr[j];
        }
        let currentAverage = sum / k;
        if (minAverage === undefined || currentAverage < minAverage) {
            minAverage = currentAverage;
        }
        if (currentAverage > maxAverage) {
            maxAverage = currentAverage;
        }
        if ((minAverage * y) < currentAverage) return true;

    }
    if (maxTime > (maxAverage * y)) return true;
    return false;
}

// alerter([1,2,100,2,2], 3, 1.5)
// alerter([1,2,4,2,2], 3, 2)
alerter([1, 2, 100, 2, 2], 2, 2.5)