function kangaroo(x1, v1, x2, v2) {
    const yes = "YES"
    const no = "NO"
    // Write your code here
    if (x1 == x2) {
        return yes;
    }
    if ((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) {
        return no;
    }
    let frontKangaroo;
    let frontKangarooSpeed;
    let backKangaroo;
    let backKangarooSpeed;
    if (x1 > x2) {
        frontKangaroo = x1;
        frontKangarooSpeed = v1;
        backKangaroo = x2;
        backKangarooSpeed = v2;
    } else {
        frontKangaroo = x2;
        frontKangarooSpeed = v2;
        backKangaroo = x1;
        backKangarooSpeed = v1;
    }
    while (backKangaroo < frontKangaroo) {
        backKangaroo += backKangarooSpeed;
        frontKangaroo += frontKangarooSpeed;
        if (backKangaroo === frontKangaroo) {
            return yes
        }
    }
    return no
}
let arr = [0, 3, 4, 2]
console.log(kangaroo(...arr));

// 0 1 2 3 4 5 6 7 8 9
// k     k l   kl   l