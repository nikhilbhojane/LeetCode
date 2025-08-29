/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    return cleanedStr == cleanedStr.split('').reverse().join('');
};
