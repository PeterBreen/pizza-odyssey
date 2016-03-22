//declare empty global variables here
var pizzasMade;
var pizzasDelivered;
var deliveriesMadeHour = [];
var pizzasMadeHour = [];
var driversPerHour = [];

// big ugly gross global arrays
var hoursOperation = ['8:00am','9:00am','10:00am','11:00am','12 noon','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm','10:00pm','11:00pm','12 midnight','1:00am'];
var minPizzasHourFloor = [0,0,0,0,0,0,2,2,2,15,15,15,12,12,12,5,5,5];
var maxPizzasHourCeiling = [4,4,4,7,7,7,15,15,15,35,35,35,31,31,31,20,20,20];
var minDeliveriesHour = [0,0,0,0,0,0,1,1,1,3,3,3,5,5,5,6,6,6];
var maxDeliveriesHour = [4,4,4,4,4,4,4,4,4,8,8,8,12,12,12,11,11,11];
//make sure these all read the same number - should be 18
console.log ('minpizzashour length: ' + minPizzasHourFloor.length);
console.log ('maxpizzashour length: ' + maxPizzasHourCeiling.length);
console.log ('mindeliverieshour length: ' + minDeliveriesHour.length);
console.log ('maxdeliverieshour length: ' + maxDeliveriesHour.length);

//object constructor notation for pizza stores - does this need storeName?
function pizzaStoreObject (pizzasMade,pizzasDelivered,driversHired) {
  this.pizzasMade = pizzasMade; //from calculatePizzasSold()
  this.pizzasDelivered = pizzasDelivered; //from calculatePizzasDelivered()
  this.driversHired = driversHired; //divide pizzasDelivered by 3, subtract remainder, if:else for 0
};

// store name objects, these are the ul id="" fields
ballard = {
  timeOfDay: hoursOperation
};
firstHill = {
  timeOfDay: hoursOperation
};
international = {
  timeOfDay: hoursOperation
};
slu = {
  timeOfDay: hoursOperation
};
georgetown = {
  timeOfDay: hoursOperation
};
ravenna = {
  timeOfDay: hoursOperation
};

//functionssssssssssssssssssssssssssss more like FUNctions am I right, no, no I am not right. UNFUNCtions.

//random generator including min-max values, actually works (because someone else wrote it)
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//calculate pizzas sold per hour - use random function and really big and ugly global arrays above
function calculatePizzasSold(storeName) {
  for (i = 0; i < hoursOperation.length; i++) {
    pizzasCalc = getRandomIntInclusive(minPizzasHourFloor[i], maxPizzasHourCeiling[i]);
    pizzasMadeHour.push(pizzasCalc);
  }
  storeName.pizzasMade = pizzasMadeHour;
}

//calculate deliveries made per hour - similar to calculating pizzas sold per hour
function calculatePizzasDelivered(storeName) {
  for (i = 0; i < hoursOperation.length; i++) {
    deliveriesCalc = getRandomIntInclusive(minDeliveriesHour[i], maxDeliveriesHour[i]);
    deliveriesMadeHour.push(deliveriesCalc);
  }
  storeName.pizzasDelivered = deliveriesMadeHour;
}

function calculateDeliveryDrivers(storeName) {
  for (i = 0; i < hoursOperation.length; i++) {
    if (deliveriesMadeHour[i] === 0) {
      driversPerHour.push('driver not reccomended');
    } else {
      //return "drivers reccomended: x" where x is deliveries/3 rounded UP to this.driversHired
      numDrivers = Math.ceil(deliveriesMadeHour / 3);
      driversPerHour.push('drivers reccomended: ' + numDrivers);
    }
    storeName.driversHired = driversPerHour;
  }
}
