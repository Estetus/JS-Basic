let RUB = 1;
let USD = 0.0103;
let EUR = 0.0094;
let CNY = 0.0733;
let GBP = 0.008;

function convert(sum, currency) {
  if (!currency) {
    return null;
  }
  return sum * currency;
}

function exchangeRate(amountToConvert, source, target) {
  if (!source || !target) {
    return null;
  }

  const amountInRUB = amountToConvert / source;
  const convertedAmount = amountInRUB * target;
  return convertedAmount;
}

console.log(exchangeRate(100, RUB, USD));
