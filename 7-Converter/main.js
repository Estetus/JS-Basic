
let RUB = 1;
let USD = 0.0103;
let EUR = 0.0094;
let CNY = 0.0733;
let GPB = 0.008


function exchangeRate(amountToConvert, source, target) {
   if (!source || !target) {
        return null;
    }

  const AmountInRub = amountToConvert / source;

  const convertetAmount = AmountInRub * target

  return convertetAmount;
}




console.log(exchangeRate(100, RUB, USD))
