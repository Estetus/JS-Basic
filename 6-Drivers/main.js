

const hasLicence = true;
const age = 19;
const isDrunk = false;

const possibilityToDrive = (age >=18 && hasLicence && !isDrunk)

console.log(`Возможность вести машину: ${possibilityToDrive ? 'Может' : 'Не может'}`)
