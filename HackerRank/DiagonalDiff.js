let arr = [[11, 2, 4],
[4, 5, 6],
[10, 8, -12]];

function diagonalDifference(arr) {
    let m = arr.length - 1;
    let diag1Sum = 0;
    let diag2Sum = 0;
    for (let i = 0; i <= m; i++) {
        diag1Sum += arr[i][i];
        diag2Sum += arr[m - i][i];
        // console.log(Math.abs(diag1Sum), Math.abs(diag2Sum));
    }
    
    console.log(Math.abs(diag1Sum - diag2Sum));

}

diagonalDifference(arr);