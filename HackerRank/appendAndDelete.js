let s = 'yu'
let t = 'y'
let k = '2';
function appendAndDelete(s, t, k) {
    if (s.length + t.length <= k) {
        console.log("1 if")
        return 'Yes'
    }
    let maxLength = s.length > t.length ? s.length : t.length;
    let i;
    for (i = 0; i < maxLength; i++) {
        if (s[i] !== t[i]) {
            break;
        }
    }
    let moves = s.length - i + t.length - i;
    k = k - moves;
    return k >= 0 && k % 2 == 0?'Yes':'No'
}
console.log(appendAndDelete(s, t, k));