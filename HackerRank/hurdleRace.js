function hurdleRace(k, height) {
    // Write your code here
    let maxHeight=Math.max(...height);
    if(maxHeight>k){
        return maxHeight-k
    }
    return 0
}