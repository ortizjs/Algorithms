function bubbleSort(arr){
    let sorted = false;
    let counter = 0;
    while(!sorted){
        sorted = true;
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i], next = arr[i + 1];
            if (current > next) {
                sorted = false;
                arr[i] = next, arr[i+1] = current;
            }
        }
        counter++;
    }
    return arr;
}

bubbleSort([0, 4, -4, -4, 7, 6, 9, 1, 3, 2])