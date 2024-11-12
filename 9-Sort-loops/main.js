const numbers = [1, 40, -5, 10, 0];

function sortArray(arr, sort) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (
        (sort === "asc" && arr[i] > arr[j]) ||
        (sort === "desc" && arr[i] < arr[j])
      ) {
        let el = arr[i];
        arr[i] = arr[j];
        arr[j] = el;
      }
    }
  }
  return arr;
}

console.log(sortArray(numbers, "desc"));
