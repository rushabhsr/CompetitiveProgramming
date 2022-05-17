let inp = 12;
function findDigits(n) {
    // Write your code here
    let temp = n;
    let retCount = 0;
    let rem;
    while (n > 0) {
        rem = n % 10;
        if (temp % rem === 0) {
            retCount += 1;
        }
        n = Math.floor(n / 10);
        // console.log(n);
    }
    return retCount;
}
console.log(findDigits(inp));