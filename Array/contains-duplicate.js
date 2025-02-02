/**
 * @param {number[]} nums
 * @return {boolean}
 */

// solution number 1
var containsDuplicate = function(nums) {
    let nums_dupl = {};

    for(let i=0 ; i<nums.length; i++){
        if(nums[i] in nums_dupl){
            return true;
        }
        nums_dupl[nums[i]] = 1;
    }
        return false;
};
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

// solution number 2 using has and add
  
var containsDuplicate = function(nums) {
    let nums_dupli = new Set();
    for(let i=0 ; i<nums.length; i++){
        if(nums_dupli.has(nums[i])){
            return true;
        }
        nums_dupli.add(nums[i]);
        
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

// solution number 3 using espion as variable to detect
var containsDuplicate = function(nums) {
    
    let nums_dupli = new Set();
    let espion = 0;
    for(let i=0 ; i<nums.length; i++){
        if(nums_dupli.has(nums[i])){
            espion++;
            if(espion>0){
                return true;
            }
        }
        
        nums_dupli.add(nums[i]);
    }
    return false;
};
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
