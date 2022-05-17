function pickingNumbers(a) {
    let sorted = a.sort(function (a, b) {
        return a - b;
    });
    console.log(sorted)
    let i = 0;
    let j = 1;

    while (i < a.length && j < a.length) {
        if (Math.abs(a[i] - a[j]) > 1) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    return Math.abs(i - j);
}
// let a = [1, 1, 2, 2, 4, 4, 5, 5, 5];
let a = [4, 6, 5, 3, 3, 1];

console.log(pickingNumbers(a));