// Convert an array of prices in USD to INR (1 USD = 83 INR).
let pricesUSD = [10, 20, 30];

let priceINR = pricesUSD.map(num => num * 83);
console.log(priceINR);