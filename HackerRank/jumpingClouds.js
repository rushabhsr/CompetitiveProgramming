// let c = [0, 0, 1, 0, 0, 1, 0];
let c = [0 ,0, 0, 1, 0, 0];
function jumpingOnClouds(c) {
    // Write your code here
    let retMinJumps = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i] === 0 && c[i + 2] !== 1 ) {
            i++;
            retMinJumps++;
        }
        // console.log("i: " + i + " retMinJumps" + retMinJumps);
    }
    return c.length-retMinJumps;
}
console.log(jumpingOnClouds(c));