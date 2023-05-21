/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let v = s;
    const arr = ['()', '{}' ,'[]'];
    let i = 0;
    while( i < arr.length){
        if(v.indexOf(arr[i]) !== -1){
            v = v.split(arr[i]).join("");
            i=0;
        }else{
            i++
        }
    }return v === ""? true: false
};