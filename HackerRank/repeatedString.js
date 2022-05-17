let s = 'aba'
let n = '10';
function repeatedString(s, n) {
    if (s.includes('a')) {
        let aOccurences = (s.match(/a/g) || []).length;
        // console.log("aOccurences" + aOccurences);
        let retCount = Math.floor(n / s.length) * aOccurences;
        let remString = n % s.length;
        if (remString > 0) {
            // console.log("remString" + remString);
            retCount += (s.slice(0, remString).match(/a/g) || []).length;
        }
        return retCount;
    }
    return 0
}
console.log(repeatedString(s, n));