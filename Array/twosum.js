/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let output=[];
    for(let i=0 ; i<nums.length; i++){
        for(let y=i+1; y<nums.length; y++){
            if(nums[i]+nums[y]===target)return [i, y];
        }
    }
};
let nums = [2,7,11,15];
let target = 9;
console.log("the target : ",nums)
console.log("Indices:", twoSum(nums, target));