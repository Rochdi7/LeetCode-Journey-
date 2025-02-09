/**
 * @param {number[]} nums
 * @return {{ length: number, array: number[] }}
 */
// Solution 1
var removeDuplicates = function(nums) {
    let index = 1;
    for(let i=0 ; i<nums.length -1 ; i++){
        if(nums[i] !== nums[i+1]){
            nums[index] = nums[i+1];
            index++;
        }
    }
    return{ length: index, Array: nums.slice(0, index)};
};

let nums = [0,0,1,1,1,2,2,3,3,4];
let result = removeDuplicates(nums);
console.log(result);

// solution 2

var removeDuplicates = function(nums) {
    let index=0;
    for(let i=1 ; i<nums.length; i++){
        if(nums[i] !== nums[index]){
            index++;
            nums[index] = nums[i];
        }
    }
    return {
        length: index+1,
        array: nums.slice(0, index+1)
    };
};

let nums2 = [0,0,1,1,1,2,2,3,3,4];
let result2 = removeDuplicates(nums2);
console.log(result2);