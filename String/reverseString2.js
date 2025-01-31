/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    let n = s.length;
    
    for(let i=0 ; i< Math.floor(n/2); i++){
        let temp = s[i];
        s[i] = s[n-i-1];
        s[n-i-1] = temp;
    }
};

// Test the function
const s=["M","E","R","H","B","A"];
console.log("before the reverse : ",s);

reverseString(s);
console.log("after reverse :",s);