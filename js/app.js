//GLOBAL VARIABLES
var totalPizzasMade; // for total pizzas per day across all stores
//make sure you remove this if you don't use it
var hoursOperation = ['8:00am','9:00am','10:00am','11:00am','12 noon','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm','10:00pm','11:00pm','12 midnight','1:00am'];

// CONSTRUCTOR FUNCTIONS
function StoreLocation(name){
  this.name = name;
  this.hourlyData = [];
}

//METHODS
StoreLocation.prototype.pushHourlyData = function(data){
  this.hourlyData.push(data);
};

//FUNCTIONING FUNCTIONS -  to avoid being hoist by my own petard
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function sumArray(inputSumArray) {
  var outputSumArray = 0;
  for (var i = 0; i < inputSumArray.length; i++) {
    outputSumArray += inputSumArray[i];
  }
  return outputSumArray;
};

function HourlyData(time, minPizzas, maxPizzas, minDeliveries, maxDeliveries){
  this.time = time;
  this.pizzasSold = getRandomIntInclusive(minPizzas, maxPizzas);
  this.deliveriesMade = getRandomIntInclusive(minDeliveries, maxDeliveries);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
};

function generateTableHeaderRow(inputArray) {
  var row = document.createElement('tr');
  var col;
  for (var i = 0; i < inputArray.length; i++) {
    col = document.createElement('th');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

function generateTableDataRow(inputArray) {
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
};

//CONSTRUCTOR OBJECTS

//METHOD/FUNCTION CALLS
var ballard = new StoreLocation('ballard');
ballard.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('11:00 am', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('12:00 noon', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('1:00 pm', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('2:00 pm', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('3:00 pm', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('4:00 pm', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('5:00 pm', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('6:00 pm', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('7:00 pm', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('8:00 pm', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('9:00 pm', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('10:00 pm', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('11:00 pm', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('12 midnight', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('1:00 am', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('2:00 am', 0, 4, 0, 4));

//OUTPUT TO TABLE

//COMMENTED OUT ASCII ART
//     _____ ______ _   _ _____    _    _ ______ _      _____
//    / ____|  ____| \ | |  __ \  | |  | |  ____| |    |  __ \
//   | (___ | |__  |  \| | |  | | | |__| | |__  | |    | |__) |
//    \___ \|  __| | . ` | |  | | |  __  |  __| | |    |  ___/
//    ____) | |____| |\  | |__| | | |  | | |____| |____| |
//   |_____/|______|_| \_|_____/  |_|  |_|______|______|_|
//
