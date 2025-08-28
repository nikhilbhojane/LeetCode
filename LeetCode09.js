/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let revStrArr = [];
    for(let i=str.length-1;i>=0;i--){
        revStrArr.push(str[i]);
    }
    return x==revStrArr.join('');
};
