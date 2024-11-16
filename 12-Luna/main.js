let card = "4561-2612-1234-5467";

function correctCard(num) {
  let result = num
    .replaceAll("-", "")
    .split("")
    .map((e, i) => {
      e = Number(e);
      if (!isNaN(e) && (i + 1) % 2 !== 0) {
        e *= 2;
      }
      if (e >= 9) {
        e -= 9;
      }

      return e;
    })
    .reduce((acc, e) => acc + e, 0);

  if (result % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(correctCard(card));
