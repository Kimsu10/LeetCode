/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const normal =  String(x);
    const reverse = normal.split('').reverse().join('')
    if(normal === reverse) {
        return true
    }else{
        return false
    }
};