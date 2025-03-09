/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// solution 1
var moveZeroes = function(nums) {
    let index = 0;
    for(let i=0 ; i<nums.length ; i++){
        const num = nums[i];
        if(num !== 0){
            nums[index] = num;
            index++;
        }
    }

    for(i=index; i<nums.length; i++){
        nums[i] = 0;
    }
};

nums = [0,1,0,3,12]
moveZeroes(nums)
console.log(nums)

// solution 2 

var moveZeroes = function(nums) {
    let index = 0;
    for(let i=0 ; i<nums.length ; i++){
        if(nums[i]!== 0){
            [nums[index],nums[i]]= [nums[i],nums[index]];
            index++;
        }
    }
};

nums = [0,1,0,3,12]
moveZeroes(nums)
console.log(nums)