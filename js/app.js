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

function generateTableDataRow(inputPizzaStore, storeId) {
  var row;
  var ducks = document.getElementById(storeId);
  var col1;
  var col2;
  var col3;
  var col4;
  for(var i = 0; i < inputPizzaStore.length; i++){
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
    ducks.appendChild(row);
  }
  return row;
};

//CONSTRUCTOR OBJECTS

//METHOD/FUNCTION CALLS
var ballard = new StoreLocation('ballard');
ballardstore.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
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

//OUTPUT TO TABLE
var testOutput = generateTableDataRow(ballard.hourlyData, ballardstore);
document.getElementById('ballardstore').appendChild(testOutput);

// var pizzaTable = document.createElement('table');
// for (i = 0; i < ballard.hourlyData.length; i++) {
//   var rowoutput = generateTableDataRow(ballard.hourlyData[i]);
//   pizzaTable.appendChild(rowoutput);
// }
// document.getElementById('ballardstore').appendChild(pizzaTable);

// var firstRow = genorateHeadingRow(['name', 'age', 'language']);
// var secondRow = genorateDataRow(['dunc', '88', 'javascript']);
// var thirdRow = genorateDataRow(['slug', '707', 'html']);
// var fourthRow = genorateDataRow(['neo', '301', 'css']);
//
// peopleTable.appendChild(firstRow);
// peopleTable.appendChild(secondRow);
// peopleTable.appendChild(thirdRow);
// peopleTable.appendChild(fourthRow);
//
// document.getElementById('table-demo').appendChild(peopleTable);

//COMMENTED OUT ASCII ART
//     _____ ______ _   _ _____    _    _ ______ _      _____
//    / ____|  ____| \ | |  __ \  | |  | |  ____| |    |  __ \
//   | (___ | |__  |  \| | |  | | | |__| | |__  | |    | |__) |
//    \___ \|  __| | . ` | |  | | |  __  |  __| | |    |  ___/
//    ____) | |____| |\  | |__| | | |  | | |____| |____| |
//   |_____/|______|_| \_|_____/  |_|  |_|______|______|_|
//
