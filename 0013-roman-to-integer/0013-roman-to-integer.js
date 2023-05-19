/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let arr = Array.from(s);
    const obj = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    }
    
    let result = 0;
    
    for(let i=0; i < arr.length; i++){
        let a = obj[arr[i]];
        let b = obj[arr[i+1]];
        
     a < b ? result -= a : result += a;
    }
    return result
};