function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let max = 0;
    
    for(let i = 0; i < A.length - 1; i++) {
        let city1 = A[i];
        for (let j = i; j < A.length; j++) {
            city2 = A[j];
            let appeal = city1 + city2 + (j - i)
            if (appeal > max) {
                max = appeal
            }
        }
    }
    
    return max
}

solution([1, 3, -3])
// solution([-8, 4, 0, 5, -3, 6])