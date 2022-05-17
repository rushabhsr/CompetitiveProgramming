// const p = [2, 3, 1];
const p = [4 ,3 ,5 ,1, 2];
function permutationEquation(p) {
    let retArr = [];
    for (let i = 0; i < p.length; i++) {
        let x = i + 1;
        if (p[p.indexOf(x)] === x) {
            retArr.push(p[i]);
        }
    }
    return retArr
}
console.log(permutationEquation(p));