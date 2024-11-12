const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function positiveNumber(arr, callback) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

function evenNumber(num) {
  return num % 2 === 0;
}

const filteredNumbers = positiveNumber(numbers, evenNumber);

console.log(filteredNumbers);
