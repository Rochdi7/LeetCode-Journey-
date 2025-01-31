/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let end = s.length-1;
    let start=0;
    console.log("before :",s1);
    
    while(start<end){
        let temp;
        temp = s[start];
        s[start] = s[end];
        s[end]= temp;
        start++;
        end--;
    }
    
};
let s1=["h","e","l","l","o"];

reverseString(s1);
console.log("after :",s1);