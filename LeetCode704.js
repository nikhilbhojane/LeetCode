/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i = 0;
    while (nums[i] < target){
        i++;
    }
    return nums[i] === target ? i : -1;
};
