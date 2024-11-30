"use strict";

function calculate(operator) {
  const inputFirst = document.getElementById("first").value;
  const inputSecond = document.getElementById("second").value;
  if (!inputFirst || !inputSecond) {
    document.querySelector(".result").innerText = "Введите оба числа!";
  }

  const num1 = parseFloat(inputFirst);
  const num2 = parseFloat(inputSecond);

  if (isNaN(num1) || isNaN(num2)) {
    document.querySelector(".result").innerText = "Введите корректные числа!";
    return;
  }

  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
  
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num2 !== 0 ? num1 / num2 : "На ноль делить нельзя!";
      break;

    default:
      result = "Ошибка";
  }

  document.querySelector(".result").innerText = `Результат: ${result}`;

}
