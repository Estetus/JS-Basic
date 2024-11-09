let addressLat = 10;
let addressLong = 20;

let positionLat = 22;
let positionLong = 33;


// Разницы в широте и долготе
let dLat = (positionLat - addressLat) * 111; // Приблизительно 111 км на каждый градус широты
let dLon = (positionLong - addressLong) * 96; // Приблизительно 96 км на каждый градус долготы

let distance = Math.sqrt(dLat * dLat + dLon * dLon);

console.log("Приблизительное расстояние:", distance, "км");
