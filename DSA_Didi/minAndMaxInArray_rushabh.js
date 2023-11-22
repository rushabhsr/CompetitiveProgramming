function minMaxArr(arr) {
    let l = arr.length;
    let max = 0, min = 0;

    for (let i = 0; i < l; i++) {
        if (arr[i] > arr[max]) {
            max = i;
            continue;
        }
        if (arr[i] < arr[min]) {
            min = i;
        }
    }

    return [arr[min], arr[max]];
}

// Test cases
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [8, 8, 8, 8, 8, 8, 8, 8, 8];
let arr3 = [8, 7, 6, 5, 4, 3, 2, 1, 8, 8];
let arr4 = [1];

console.log(minMaxArr(arr1));
console.log(minMaxArr(arr2));
console.log(minMaxArr(arr3));
console.log(minMaxArr(arr4));
