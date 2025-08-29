/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let priceLen = prices.length;
    if(priceLen > 0){
        let low = prices[0];
        let high = prices[0];
        let profit = 0;
        for(let i = 0; i < priceLen; i++){
            if (prices[i] < low){
                low = prices[i];
                high = prices[i]
            }
            else if(prices[i] > high){
                high = prices[i]
            }

            profit = profit<(high-low)? high-low : profit;
        }
        return profit;
    } else {
        return 0;
    }
};
