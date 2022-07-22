function cutTheSticks(arr) {
    // Write your code here
    let retArr=[];
    for (let i = 0; arr.length > 0; i++) {
        // console.log("indexOfmInVal" + arr.indexOf(Math.min(...arr)));
        // console.log(arr.length);
        retArr.push(arr.length);
        let minVal = Math.min(...arr);
        arr = arr.filter(x => x !== minVal);
        // console.log('minVal: ' + minVal);
        // console.log('arr: ' + arr);
    }
    // console.log("DONE");
    return retArr;
}
let arr = [1, 2, 3, 4, 3, 3, 2, 1];
// let arr = [5, 4, 4, 2, 2, 8];
console.log(cutTheSticks(arr));