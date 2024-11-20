const data = [
  "29-02-2024", // true - 2024 високосный год
  "29-02-2023", // false - 2023 не високосный год
  "02/29/2024", // true - EN формат записи 29-02-2024
  "02/29/2023", // false - EN формат записи 29-02-2023
  "31-09-2024", // false - 31 сентября не бывает
  "30-09-2024", // true - Тут проблем нет - корректная дата
  "30d-09m-2024y", // true / false - корректная дата при условии parseInt для валидации числа, при Number - нет
  "30.01.2024", // true / false - зависит от парсинга разделителей
];

const isValidDate = (date, isEnFormat) => {
  const parts = date.split(/[-\/.]/);

  if (parts.length !== 3) return false;

  //  let day, month, year;

  if (isEnFormat) {
    [month, day, year] = parts;
  } else {
    [day, month, year] = parts;
  }

  if (day.length !== 2 || month.length !== 2 || year.length !== 4) return false;

  // Проверка на число
  const d = parseInt(day, 10);
  const m = parseInt(month, 10);
  const y = parseInt(year, 10);
  if (isNaN(d) || isNaN(m) || isNaN(y)) return false;

  if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1000 || y > 9999) return false;
  if ((m === 4 || m === 6 || m === 9 || m === 11) && d > 30) return false;
  if (m === 2 && d > 29) return false;
  if (m === 2 && d === 29 && !(y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)))
    return false;

  return true;
};

const formattedData = data
  .filter((date) => {
    const isEnFormat = date.includes("/");
    return isValidDate(date, isEnFormat);
  })
  .map((date) => date.split(/[-\/]/).join("-"));

console.log(formattedData);
