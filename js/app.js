//declare empty global variables here
var pizzasMade; // for total pizzas per day across all stores
var storeNameArray = ['ballardstore', 'firstHillstore', 'internationalstore', 'ravennastore', 'slustore', 'georgetownstore']; // list of store ID values, may or may not be useful

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

// store name objects, these are the ul id="" fields
ballard = {
  timeOfDay: hoursOperation,
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
  var pizzasMadeHour = [];
  for (i = 0; i < hoursOperation.length; i++) {
    pizzasCalc = getRandomIntInclusive(minPizzasHourFloor[i], maxPizzasHourCeiling[i]);
    pizzasMadeHour.push(pizzasCalc);
  }
  storeName.pizzasMade = pizzasMadeHour;
}

//calculate deliveries made per hour - similar to calculating pizzas sold per hour
//ALSO calculates delivery drivers per hour (keeping it in same scope BECAUSE ARGH)
function calculatePizzasDelivered(storeName) {
  var deliveriesMadeHour = [];
  var driversPerHour = [];
  for (i = 0; i < hoursOperation.length; i++) {
    deliveriesCalc = getRandomIntInclusive(minDeliveriesHour[i], maxDeliveriesHour[i]);
    deliveriesMadeHour.push(deliveriesCalc);
    if (deliveriesCalc === 0) {
      driversPerHour.push('[ driver not reccomended ]');
    } else {
      //return "drivers reccomended: x" where x is deliveries/3 rounded UP to this.driversHired
      numDrivers = Math.ceil(deliveriesMadeHour[i] / 3);
      driversPerHour.push('[ drivers reccomended: ' + numDrivers + ' ]');
    }
    storeName.driversHired = driversPerHour;
    storeName.pizzasDelivered = deliveriesMadeHour;
  }
}

//run populateStoreObject on every store
//populates an individual store's array
function populateStoreObject(storeName) {
  calculatePizzasSold(storeName);
  calculatePizzasDelivered(storeName);
}
//run on every store - make this a loop later
function populateStores() {
  populateStoreObject(ballard);
  populateStoreObject(firstHill);
  populateStoreObject(georgetown);
  populateStoreObject(international);
  populateStoreObject(ravenna);
  populateStoreObject(slu);
}

//run populateStores so I can fix content to HTML via DOM
populateStores();

//now that content is stored in arrays, make further poor choices in life
//make this a loop at some point so it is DRY but today I just want it to function
//heh, get it, function. HEH~

//adds ballard data to DOM
document.getElementById('ballardstore');
var addballard;
var pizzasMade = ballard.pizzasMade;
var pizzasDelivered = ballard.pizzasDelivered;
var driversHired = ballard.driversHired;
for (i = 0; i < 18; i++) {
  var addballard = document.createElement('li');
  addballard.textContent = this.hoursOperation[i] + ' ' + this.pizzasMade[i] + ' pizzas, ' + this.pizzasDelivered[i] + ' deliveries ' + ' -- ' + this.driversHired[i];
  ballardstore.appendChild(addballard);
}
//adds first hill data to DOM
document.getElementById('firsthillstore');
var addfirstHill;
var pizzasMade = firstHill.pizzasMade;
var pizzasDelivered = firstHill.pizzasDelivered;
var driversHired = firstHill.driversHired;
for (i = 0; i < 18; i++) {
  var addfirstHill = document.createElement('li');
  addfirstHill.textContent = this.hoursOperation[i] + ' ' + this.pizzasMade[i] + ' pizzas, ' + this.pizzasDelivered[i] + ' deliveries ' + ' -- ' + this.driversHired[i];
  firsthillstore.appendChild(addfirstHill);
}
//adds international district data to DOM
document.getElementById('internationalstore');
var addInternational;
var pizzasMade = international.pizzasMade;
var pizzasDelivered = international.pizzasDelivered;
var driversHired = international.driversHired;
for (i = 0; i < 18; i++) {
  var addInternational = document.createElement('li');
  addInternational.textContent = this.hoursOperation[i] + ' ' + this.pizzasMade[i] + ' pizzas, ' + this.pizzasDelivered[i] + ' deliveries ' + ' -- ' + this.driversHired[i];
  internationalstore.appendChild(addInternational);
}

// add SLU data to DOM
document.getElementById('slustore');
var addSlu;
var pizzasMade = slu.pizzasMade;
var pizzasDelivered = slu.pizzasDelivered;
var driversHired = slu.driversHired;
for (i = 0; i < 18; i++) {
  var addSlu = document.createElement('li');
  addSlu.textContent = this.hoursOperation[i] + ' ' + this.pizzasMade[i] + ' pizzas, ' + this.pizzasDelivered[i] + ' deliveries ' + ' -- ' + this.driversHired[i];
  slustore.appendChild(addSlu);
}

//add Georgetown data to DOM
document.getElementById('georgetownstore');
var addGeorgetown;
var pizzasMade = georgetown.pizzasMade;
var pizzasDelivered = georgetown.pizzasDelivered;
var driversHired = georgetown.driversHired;
for (i = 0; i < 18; i++) {
  var addGeorgetown = document.createElement('li');
  addGeorgetown.textContent = this.hoursOperation[i] + ' ' + this.pizzasMade[i] + ' pizzas, ' + this.pizzasDelivered[i] + ' deliveries ' + ' -- ' + this.driversHired[i];
  georgetownstore.appendChild(addGeorgetown);
}

//add Ravenna data to DOM
document.getElementById('ravennastore');
var addRavenna;
var pizzasMade = ravenna.pizzasMade;
var pizzasDelivered = ravenna.pizzasDelivered;
var driversHired = ravenna.driversHired;
for (i = 0; i < 18; i++) {
  var addRavenna = document.createElement('li');
  addRavenna.textContent = this.hoursOperation[i] + ' ' + this.pizzasMade[i] + ' pizzas, ' + this.pizzasDelivered[i] + ' deliveries ' + ' -- ' + this.driversHired[i];
  ravennastore.appendChild(addRavenna);
}
