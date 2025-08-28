/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let openBrackets = ['(','{','['];
    let pair = {')':'(','}':'{',']':'['};
    let tempArr = [];
    for(let i=0;i<s.length;i++){
        if(openBrackets.includes(s[i])){
            tempArr.push(s[i]);
        } else {
            if(tempArr.length && tempArr[tempArr.length-1] == pair[s[i]]){
                tempArr.pop();
            }else{
                return false;
            }
        }
    }
    return (tempArr.length==0)
};