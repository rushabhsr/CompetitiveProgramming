function chocolateFeast(n, c, m) {
    // Write your code here
    let totalChocolates = Math.floor(n / c);
    // let moneyLeft = n % c;
    let wrappers = totalChocolates;
    while (wrappers >= m) {
        totalChocolates += Math.floor(wrappers / m);
        wrappers = wrappers % m + Math.floor(wrappers / m);
    }
    return totalChocolates;
}
// let n = 6;  c = 2; m = 2;
// let  n = 10, c = 2, m = 5 ;
let n = 12, c = 4, m = 4;
console.log(chocolateFeast(n, c, m));