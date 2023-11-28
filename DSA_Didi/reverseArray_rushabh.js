function reverseArr(a) {
    let l = a.length;
    for (let i = 0; i < l / 2; i++) {
        let temp = a[i];
        a[i] = a[l - i - 1];
        a[l - i - 1] = temp;
    }
    return a;
}

// Test cases
let arr1 = [1, 2, 3];
let arr2 = [1, 2];
let arr3 = [];
let arr4 = [0, 123, 412, 31, 23, "aesd", "qwe", "qwe"];

console.log(reverseArr(arr1));
console.log(reverseArr(arr2));
console.log(reverseArr(arr3));
console.log(reverseArr(arr4));
