function pickingNumbers(a) {
    let lengthSumArr = [];
    let lengthSum = 1;
    // Write your code here
    for (let i = 0; i < a.length - 1; i++) {
        let consecutiveSum = Math.abs(a[i] - a[i + 1]);
        // console.log(a[i], "-", a[i + 1], consecutiveSum);
        if (consecutiveSum <= 1) {
            lengthSum++;
            continue
        }
        else {
            lengthSum = 0;
        }
        lengthSumArr.push(lengthSum);
    }
    lengthSumArr.push(lengthSum);
    // console.log(lengthSumArr);
    return (Math.max(...lengthSumArr))
}// let a = [1, 1, 2, 2, 4, 4, 5, 5, 5];
let a = [4, 6, 5, 3, 3, 1];

console.log(pickingNumbers(a));