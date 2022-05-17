process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

let stdin_input='';
const countDivisible = (arr,n,k) => {
    let count=0;
    for (let i=0;i<n;i++){
        if(parseInt(arr[i])%k===0){
            count++;
        }
    }
    return count;
}
process.stdin.on("data", (data) => {
    stdin_input += data;
});
process.stdin.on("end", (data) => {
    //console.log(stdin_input);
    let [n, karr] = stdin_input.toString().split(' ');
    // console.log(withDrawAmt, TotalBal)
    let k= karr.split("\n").shift();
    console.log(countDivisible(karr,n,k));
});
