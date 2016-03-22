//declare empty global variables here

// big ugly gross global arrays
var hoursOperation = ['8:00am','9:00am','10:00am','11:00am','12 noon','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm','10:00pm','11:00pm','12 midnight','1:00am'];
var minPizzasHourFloor = [0,0,0,0,0,0,2,2,2,15,15,15,12,12,12,5,5,5];
var maxPizzasHourCeiling = [4,4,4,7,7,7,15,15,15,35,35,35,31,31,31,20,20,20];

//object constructor notation for pizza stores - does this need storeName?
function pizzaStoreObject (timeOfDay, pizzasMade, pizzasDelivered, driversHired) {
  this.timeOfDay = timeOfDay; // from global hoursOperation
  this.pizzasMade = pizzasMade; //from calculatePizzasSold()
  this.pizzasDelivered = pizzasDelivered; //from calculatePizzasDelivered()
  this.driversHired = driversHired; //divide pizzasDelivered by 3, subtract remainder, if:else for 0
};

// store name objects, these are the ul id="" fields
ballard = {};
firstHill = {};
international = {};
slu = {};
georgetown = {};
ravenna = {};

//functionssssssssssssssssssssssssssss more like FUNctions am I right, no, no I am not right. UNFUNCtions.

//random generator including min-max values, actually works (because someone else wrote it)
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//calculate pizzas sold per hour - use random function and really big and ugly global arrays above
function calculatePizzasSold(storeName) {
  for (i = 0; i < hoursOperation.length; i++) {
    pizzasCalc = getRandomIntInclusive(minPizzasHourFloor[i], maxPizzasHourCeiling[i]);
    this.pizzasHour.push(pizzasCalc);
  }
  return storeName.pizzasHour; //how do I return to a specific storename object?
}
