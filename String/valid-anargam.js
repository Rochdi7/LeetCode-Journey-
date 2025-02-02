/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let anar = false;
    if(s.length !== t.length){
        return false;
    }

   let list1 = s.split('').sort().join('');
   let list2 = t.split('').sort().join('');

   if(list1 === list2){
    anar = true;
   }
   return anar;
    
};
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));