//GLOBAL VARIABLES
var totalPizzasMade = 0, branchPizzasMade = 0; // for total pizzas per day across all stores
var totalPizzasArray = []; //for total pizzas per day across all stores
var getRandomIntInclusive, sumArray, HourlyData, generateTableData, generateTotalSales; // function vars

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
  var driver;
  this.time = time;
  this.pizzasSold = getRandomIntInclusive(minPizzas, maxPizzas);
  this.deliveriesMade = getRandomIntInclusive(minDeliveries, maxDeliveries);
  driver = Math.ceil(this.deliveriesMade / 3);
  if (driver === 0) { this.driversNeeded = 'no driver reccomended';
  } else { this.driversNeeded = driver;
  };
};

var salesDataCheck = document.getElementById('sales-data-body');
if (salesDataCheck) {
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
  }
};

function generateTotalSales(inputPizzaObject, storeId2) {
  var branchPizzasMade = 0;
  for(var i = 0; i < inputPizzaObject.length; i++) {
    branchPizzasMade += storeId2.hourlyData[i].pizzasSold;
  }
  return branchPizzasMade;
};
//CONSTRUCTOR OBJECTS

//METHOD/FUNCTION CALLS
var ballard = new StoreLocation('ballard');
ballard.pushHourlyData(new HourlyData('8:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('9:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('10:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('11:00 am', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('12 noon', 5, 10, 2, 8));
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

var firsthill = new StoreLocation('firsthill');
firsthill.pushHourlyData(new HourlyData('8:00 am', 1, 3, 1, 7));
firsthill.pushHourlyData(new HourlyData('9:00 am', 1, 3, 1, 7));
firsthill.pushHourlyData(new HourlyData('10:00 am', 1, 3, 1, 7));
firsthill.pushHourlyData(new HourlyData('11:00 am', 5, 9, 2, 8));
firsthill.pushHourlyData(new HourlyData('12 noon', 5, 9, 2, 8));
firsthill.pushHourlyData(new HourlyData('1:00 pm', 5, 9, 2, 8));
firsthill.pushHourlyData(new HourlyData('2:00 pm', 2, 13, 1, 6));
firsthill.pushHourlyData(new HourlyData('3:00 pm', 2, 13, 1, 6));
firsthill.pushHourlyData(new HourlyData('4:00 pm', 2, 13, 1, 6));
firsthill.pushHourlyData(new HourlyData('5:00 pm', 18, 32, 3, 9));
firsthill.pushHourlyData(new HourlyData('6:00 pm', 18, 32, 3, 9));
firsthill.pushHourlyData(new HourlyData('7:00 pm', 18, 32, 3, 9));
firsthill.pushHourlyData(new HourlyData('8:00 pm', 1, 3, 5, 12));
firsthill.pushHourlyData(new HourlyData('9:00 pm', 1, 3, 5, 12));
firsthill.pushHourlyData(new HourlyData('10:00 pm', 1, 3, 5, 12));
firsthill.pushHourlyData(new HourlyData('11:00 pm', 8, 20, 6, 16));
firsthill.pushHourlyData(new HourlyData('12 midnight', 8, 20, 6, 16));
firsthill.pushHourlyData(new HourlyData('1:00 am', 8, 20, 6, 16));

var international = new StoreLocation('international');
international.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
international.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
international.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
international.pushHourlyData(new HourlyData('11:00 am', 0, 7, 0, 4));
international.pushHourlyData(new HourlyData('12 noon', 0, 7, 0, 4));
international.pushHourlyData(new HourlyData('1:00 pm', 0, 7, 0, 4));
international.pushHourlyData(new HourlyData('2:00 pm', 2, 15, 1, 4));
international.pushHourlyData(new HourlyData('3:00 pm', 2, 15, 1, 4));
international.pushHourlyData(new HourlyData('4:00 pm', 2, 15, 1, 4));
international.pushHourlyData(new HourlyData('5:00 pm', 10, 26, 4, 6));
international.pushHourlyData(new HourlyData('6:00 pm', 10, 26, 4, 6));
international.pushHourlyData(new HourlyData('7:00 pm', 10, 26, 4, 6));
international.pushHourlyData(new HourlyData('8:00 pm', 8, 22, 7, 15));
international.pushHourlyData(new HourlyData('9:00 pm', 8, 22, 7, 15));
international.pushHourlyData(new HourlyData('10:00 pm', 8, 22, 7, 15));
international.pushHourlyData(new HourlyData('11:00 pm', 0, 2, 2, 8));
international.pushHourlyData(new HourlyData('12 midnight', 0, 2, 2, 8));
international.pushHourlyData(new HourlyData('1:00 am', 0, 2, 2, 8));

var slu = new StoreLocation('slu');
slu.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
slu.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
slu.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
slu.pushHourlyData(new HourlyData('11:00 am', 0, 7, 0, 4));
slu.pushHourlyData(new HourlyData('12 noon', 0, 7, 0, 4));
slu.pushHourlyData(new HourlyData('1:00 pm', 0, 7, 0, 4));
slu.pushHourlyData(new HourlyData('2:00 pm', 5, 15, 0, 4));
slu.pushHourlyData(new HourlyData('3:00 pm', 5, 15, 0, 4));
slu.pushHourlyData(new HourlyData('4:00 pm', 5, 15, 0, 4));
slu.pushHourlyData(new HourlyData('5:00 pm', 25, 39, 13, 18));
slu.pushHourlyData(new HourlyData('6:00 pm', 25, 39, 13, 18));
slu.pushHourlyData(new HourlyData('7:00 pm', 25, 39, 13, 18));
slu.pushHourlyData(new HourlyData('8:00 pm', 22, 36, 5, 22));
slu.pushHourlyData(new HourlyData('9:00 pm', 22, 36, 5, 22));
slu.pushHourlyData(new HourlyData('10:00 pm', 22, 36, 5, 22));
slu.pushHourlyData(new HourlyData('11:00 pm', 5, 21, 16, 31));
slu.pushHourlyData(new HourlyData('12 midnight', 5, 21, 16, 31));
slu.pushHourlyData(new HourlyData('1:00 am', 5, 21, 16, 31));

var georgetown = new StoreLocation('georgetown');
georgetown.pushHourlyData(new HourlyData('8:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('9:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('10:00 am', 2, 7, 3, 5));
georgetown.pushHourlyData(new HourlyData('11:00 am', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('12 noon', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('1:00 pm', 3, 8, 3, 9));
georgetown.pushHourlyData(new HourlyData('2:00 pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('3:00 pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('4:00 pm', 1, 5, 1, 4));
georgetown.pushHourlyData(new HourlyData('5:00 pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('6:00 pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('7:00 pm', 5, 13, 2, 4));
georgetown.pushHourlyData(new HourlyData('8:00 pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('9:00 pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('10:00 pm', 22, 41, 15, 42));
georgetown.pushHourlyData(new HourlyData('11:00 pm', 15, 20, 6, 21));
georgetown.pushHourlyData(new HourlyData('12 midnight', 15, 20, 6, 21));
georgetown.pushHourlyData(new HourlyData('1:00 am', 15, 20, 6, 21));

var ravenna = new StoreLocation('ravenna');
ravenna.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
ravenna.pushHourlyData(new HourlyData('11:00 am', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('12 noon', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('1:00 pm', 0, 7, 0, 4));
ravenna.pushHourlyData(new HourlyData('2:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('3:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('4:00 pm', 2, 15, 1, 4));
ravenna.pushHourlyData(new HourlyData('5:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('6:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('7:00 pm', 6, 9, 5, 18));
ravenna.pushHourlyData(new HourlyData('8:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('9:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('10:00 pm', 4, 8, 2, 5));
ravenna.pushHourlyData(new HourlyData('11:00 pm', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData('12 midnight', 2, 4, 3, 11));
ravenna.pushHourlyData(new HourlyData('1:00 am', 2, 4, 3, 11));

//Total Pizzas sold per store
var ballardTotalSaleCount = generateTotalSales(ballard.hourlyData, ballard);
var firsthillTotalSaleCount = generateTotalSales(firsthill.hourlyData, firsthill);
var internationalTotalSaleCount = generateTotalSales(international.hourlyData, international);
var sluTotalSaleCount = generateTotalSales(slu.hourlyData, slu);
var georgetownTotalSaleCount = generateTotalSales(georgetown.hourlyData, georgetown);
var ravennaTotalSaleCount = generateTotalSales(ravenna.hourlyData, ravenna);

//OUTPUT TO TABLE
var salesDataCheck = document.getElementById('sales-data-body');
if (salesDataCheck) {
  var ballardOutput = generateTableData(ballard.hourlyData, ballard);
  document.getElementById('ballard').appendChild(ballardOutput);

  var firsthillOutput = generateTableData(firsthill.hourlyData, firsthill);
  document.getElementById('ballard').appendChild(firsthillOutput);

  var internationalOutput = generateTableData(international.hourlyData, international);
  document.getElementById('international').appendChild(internationalOutput);

  var sluOutput = generateTableData(slu.hourlyData, slu);
  document.getElementById('slu').appendChild(sluOutput);

  var georgetownOutput = generateTableData(georgetown.hourlyData, georgetown);
  document.getElementById('georgetown').appendChild(georgetownOutput);

  var ravennaOutput = generateTableData(ravenna.hourlyData, ravenna);
  document.getElementById('ravenna').appendChild(ravennaOutput);
};
//create total pizzas sold, push to homepage via DOM

var totalPizzasMade = ballardTotalSaleCount + firsthillTotalSaleCount + internationalTotalSaleCount + sluTotalSaleCount + georgetownTotalSaleCount + ravennaTotalSaleCount;
var pizzaOdyssey = document.getElementById('featurenumber');
if (pizzaOdyssey) {
  featurenumber.textContent = totalPizzasMade + ' happy pizza odysseys this week!';
}

//store name function - works with listener
var createStoreName = document.getElementById('create-store-name');
function createStoreName(event){
  event.preventDefault();
  var storeNameFromUser = event.target.storename.value;
  createStoreName.textContent = storeNameFromUser;
};

//listeners
createStoreName.addEventListener('submit', createStoreName);

// function collectNerdFighter(event){
//   event.preventDefault();
//   var highScoreTable = document.getElementById('high-score-table');
//   var fighter = event.target.fighter.value;
//   var score = parseInt(event.target.score.value);
//   var fighterRow = document.createElement('tr');
//   var fighterColumn = document.createElement('td');
//   fighterColumn.textContent = fighter;
//   fighterRow.appendChild(fighterColumn);
//   var scoreColumn = document.createElement('td');
//   scoreColumn.textContent = score;
//   fighterRow.appendChild(scoreColumn);
//   highScoreTable.appendChild(fighterRow);
// }
//
// var createFighterForm = document.getElementById('high-score-form');
//
// createFighterForm.addEventListener('submit', collectNerdFighter);
