const object = {
  search: "Вася",
  take: 10,
};

function returnUrl(obj) {
  let result = [];
  for (const key of Object.keys(obj)) {
    result.push(`${key}=${obj[key]}`);
  }
  return result.join("&");
}

console.log(returnUrl(object));
