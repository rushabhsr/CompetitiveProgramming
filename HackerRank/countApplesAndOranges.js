function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let retCountApples = 0;
    let retCountOranges = 0;
    for (let i = 0; i < apples.length || i < oranges.length; i++) {
        // console.log(s, "<=", a + apples[i], "<=", t)
        // console.log(s, "<=", a + oranges[i], "<=", t)
        if (apples[i] !== undefined && s <= apples[i] + a && apples[i] + a <= t) {
            retCountApples++;
        }
        if (oranges[i] !== undefined && s <= oranges[i] + b && oranges[i] + b <= t) {
            retCountOranges++;
        }
    }
    // return retCountApples + " " + retCountOranges;
    console.log(retCountApples + "\n" + retCountOranges);
    return [retCountApples, retCountOranges];

}
let s = 7, t = 11, a = 3, b = 2;
let apples = [-2, 2, 1];
let oranges = [5, -6];
console.log(countApplesAndOranges(s, t, a, b, apples, oranges));
