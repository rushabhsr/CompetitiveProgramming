process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
const sumSpaceSeperatedNum= (spaceSepNums)=>{
    let [a,b]=spaceSepNums.split(" ");
    return parseInt(a)+parseInt(b);
}
let stdin_input='';
process.stdin.on("data", (data) => {
    stdin_input += data;
});
process.stdin.on("end", (data) => {
    //console.log(stdin_input);
    let input = stdin_input.toString().split('\n');
    // let n = input.shift();
    for(let i=1;i<=input[0];i++){
        console.log(sumSpaceSeperatedNum(input[i]));   
    }
});
