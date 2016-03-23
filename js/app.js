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

function generateTableData(inputPizzaObject, storeId) {
  var row;
  this.storeId = storeId;
  var col1;
  var col2;
  var col3;
  var col4;
  for(var i = 0; i < inputPizzaObject.length; i++){
    var rowTerminator = document.getElementById(storeId.name);
    var row = document.createElement('tr');
    col1 = document.createElement('td');
    col2 = document.createElement('td');
    col3 = document.createElement('td');
    col4 = document.createElement('td');
    col1.textContent = storeId.hourlyData[i].time;
    col2.textContent = storeId.hourlyData[i].pizzasSold;
    col3.textContent = storeId.hourlyData[i].deliveriesMade;
    col4.textContent = storeId.hourlyData[i].driversNeeded;
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    rowTerminator.appendChild(row);
  }
  return row;
};

//CONSTRUCTOR OBJECTS

//METHOD/FUNCTION CALLS
var ballard = new StoreLocation('ballard');
ballard.pushHourlyData(new HourlyData('8:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('9:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('10:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('11:00 am', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('12:00 noon', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('1:00 pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('2:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('5:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('6:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('7:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('8:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('9:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('10:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('11:00 pm', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('12 midnight', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('1:00 am', 8, 15, 6, 16));

//OUTPUT TO TABLE
var ballardOutput = generateTableData(ballard.hourlyData, ballard);
document.getElementById('ballard').appendChild(ballardOutput);

//COMMENTED OUT ASCII ART
//     _____ ______ _   _ _____    _    _ ______ _      _____
//    / ____|  ____| \ | |  __ \  | |  | |  ____| |    |  __ \
//   | (___ | |__  |  \| | |  | | | |__| | |__  | |    | |__) |
//    \___ \|  __| | . ` | |  | | |  __  |  __| | |    |  ___/
//    ____) | |____| |\  | |__| | | |  | | |____| |____| |
//   |_____/|______|_| \_|_____/  |_|  |_|______|______|_|
//
