function getTotalX(a, b) {
    // Write your code here
    let maxArra = Math.max(...a);
    let minArrb = Math.min(...b);
    let factorNumbers = [];
    let factorNumberCount = 0;
    while (maxArra <= minArrb) {
        for (let i = 0; i < b.length; i++) {
            if (maxArra % b[i] === 0) {
                factorNumberCount++;
            }
        }
        if (factorNumberCount = b.length) {
            factorNumbers.push(maxArra);
        }
        maxArra += maxArra;
    }
    return factorNumbers;
}
// let a = [2, 6];
let a = [3, 4];
// let b = [12, 24];
let b = [24, 48];
// kjasnds
console.log(getTotalX(a, b));
