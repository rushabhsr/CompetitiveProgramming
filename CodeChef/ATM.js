process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
const processingFee = 0.5;
process.stdin.on("data", (data) => {
    var [withDrawAmt, TotalBal] = data.toString().split(' ');
    // console.log(withDrawAmt, TotalBal)
    if ((parseInt(withDrawAmt) <= parseFloat(TotalBal) - 0.5) && parseInt(withDrawAmt) % 5 === 0) {
        console.log((TotalBal - withDrawAmt -processingFee).toFixed(2))
    }
    else {
        console.log(parseFloat(TotalBal).toFixed(2));
    }
});
