// global variables
var hoursOperation = ['8:00am','9:00am','10:00am','11:00am','12 noon','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm','10:00pm','11:00pm','12 midnight','1:00am'];
var minPizzasHourFloor = [0,0,0,0,0,0,2,2,2,15,15,15,12,12,12,5,5,5];
var maxPizzasHourCeiling = [4,4,4,7,7,7,15,15,15,35,35,35,31,31,31,20,20,20];
//functions

//random generator including min-max values
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function calculatePizzasSold(storeName) {
  for (i = 0; i < hoursOperation.length; i++) {
    pizzasCalc = getRandomIntInclusive(minPizzasHourFloor[i], maxPizzasHourCeiling[i]);
    pizzasHour.push(pizzasCalc);
  }
  return pizzasHour;
}
