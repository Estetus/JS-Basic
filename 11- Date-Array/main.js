const data = ["10-02-2022", "тест", "11/12/2022", "00/13/2022", "41/12/2024"];

const isValidDate = (date) => {
  const parts = date.split(/[-\/]/);

  if (parts.length !== 3) return false;

  const [day, month, year] = parts;

  if (day.length !== 2 || month.length !== 2 || year.length !== 4) return false;

  if (
    day < "01" ||
    day > "31" ||
    month < "01" ||
    month > "12" ||
    year < "1000" ||
    year > "9999"
  )
    return false;

  if (
    (month === "04" || month === "06" || month === "09" || month === "11") &&
    day > "30"
  )
    return false;

  if (month === "02" && day > "29") return false;

  return true;
};

const formattedData = data
  .filter(isValidDate)
  .map((date) => date.split(/[-\/]/).join("-"));

console.log(formattedData);
