/**
 * @param {string} s
 * @return {boolean}
 */

// solution 1
var isPalindrome = function(s) {

    s = s.replace( /[^a-zA-Z0-9]/g , "").toLowerCase();

    left = 0;
    right = s.length-1;

    while(left<right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
    
};
console.log(isPalindrome("amanaplanacanalpanama"));

// solution 2
var isPalindrome = function(s) {

    s = s.replace( /[^a-zA-Z0-9]/g , "").toLowerCase();

    let left = 0;
    let right = Math.floor(s.length/2);

    while(right<s.length){
        if(s[left]!== s[s.length -left -1]){
            return false;
            
        }
        left++;
        right++;
        
    }
    return true;
    
};
console.log(isPalindrome("Raceacar"));