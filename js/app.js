//GLOBAL VARIABLES
var totalPizzasMade, storeId, inputPizzaObject, minPizzasInput1, maxPizzasInput1, minDeliverInput1, maxDeliverInput1;
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
function generateTableHeading(inputHeadingArray) {
  var row = document.createElement('tr');
  var col;
  for (var i = 0; i < inputHeadingArray.length; i++) {
    col = document.createElement('th');
    col.textContent = inputHeadingArray[i];
    row.appendChild(col);
  }
  return row;
};

var salesDataCheck = document.getElementById('sales-data-body');
if (salesDataCheck) {
  function generateTableData(inputPizzaObject, storeId) {
    var row;
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
    document.getElementById('storeId').appendChild(row);
    return row;
  }
};

// function generateTotalSales(inputPizzaObject, storeId2) {
//   var branchPizzasMade = 0;
//   for(var i = 0; i < inputPizzaObject.length; i++) {
//     branchPizzasMade += storeId2.hourlyData[i].pizzasSold;
//   }
//   return branchPizzasMade;
// };

//event handler
var createDataTable = document.getElementById('new-pizza-form');
if (createDataTable) {
  function collectDataForTable (event){
    event.preventDefault();
    storeId = new StoreLocation(event.target.storenameinput.value);
    minPizzasInput1 = parseInt(event.target.minpizzas1.value);
    maxPizzasInput1 = parseInt(event.target.maxpizzas1.value);
    minDeliverInput1 = parseInt(event.target.mindelivers1.value);
    maxDeliverInput1 = parseInt(event.target.maxdelivers1.value);
    calculateTableData(storeId);
    return storeId;
  };
}

function calculateTableData(storeId) {
  this.storeId = storeId.name;
  console.log('storeId: ', storeId, 'this.storeId: ', this.storeId);
  storeId.pushHourlyData(new HourlyData('8:00 am', minPizzasInput1, maxPizzasInput1, minDeliverInput1, maxDeliverInput1));
  storeId.pushHourlyData(new HourlyData('9:00 am', minPizzasInput1, maxPizzasInput1, minDeliverInput1, maxDeliverInput1));
  storeId.pushHourlyData(new HourlyData('10:00 am', minPizzasInput1, maxPizzasInput1, minDeliverInput1, maxDeliverInput1));
  generateTableData(storeId, this.storeId);
};

//OUTPUT TO TABLE
// var salesDataCheck = document.getElementById('sales-data-body');
// if (salesDataCheck) {
//   var ballardOutput = generateTableData(ballard.hourlyData, ballard);
//   document.getElementById('ballard').appendChild(ballardOutput);
// };
//create total pizzas sold, push to homepage via DOM

var pizzaOdyssey = document.getElementById('featurenumber');
if (pizzaOdyssey) {
  featurenumber.textContent = totalPizzasMade + ' happy pizza odysseys this week!';
}

//listeners
createDataTable.addEventListener('submit', collectDataForTable);

//sample code from Drew which should help
//var firstRow = generateHeadingRow(['Time', 'Pizzas Sold','Deliveries Made','Drivers Needed']);
