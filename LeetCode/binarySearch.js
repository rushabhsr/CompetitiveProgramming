var search = function (nums, target) {
    let len = nums.length;
    let mid = Math.floor(len / 2);
    while (mid < nums.length) {
        if(nums[mid]===target){
            return mid;
        }
    }
}
