//GLOBAL VARIABLES
var totalPizzasMade = 0, storeId, inputPizzaObject, inputHeadingArray, minPizzasInput1, maxPizzasInput1, minDeliverInput1, maxDeliverInput1;
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
  totalPizzasMade += this.pizzasSold;
  this.deliveriesMade = getRandomIntInclusive(minDeliveries, maxDeliveries);
  driver = Math.ceil(this.deliveriesMade / 3);
  if (driver === 0) { this.driversNeeded = 'no driver recommended';
  } else { this.driversNeeded = driver;
  };
};
var tablePlaceCheck = document.getElementById('store-data-location');
function generateTable(storeId) {
  var storeNameHeader = document.createElement('h3');
  storeNameHeader.textContent = storeId.name;
  tablePlaceCheck.appendChild(storeNameHeader);
  var createTable = document.createElement('table');
  tablePlaceCheck.appendChild(createTable);
  createTable.setAttribute('id', storeId.name);
  var tableHead = generateTableHeading(['Time','Pizzas Sold','Deliveries Made','Drivers Needed']);
  createTable.appendChild(tableHead);
  var tableBody = generateTableData(storeId.hourlyData, storeId);
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
      localStorage.setItem('TotalPizzas', totalPizzasMade);
    }
    return row;
  }
};

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
    minPizzasInput2 = parseInt(event.target.minpizzas2.value);
    maxPizzasInput2 = parseInt(event.target.maxpizzas2.value);
    minDeliverInput2 = parseInt(event.target.mindelivers2.value);
    maxDeliverInput2 = parseInt(event.target.maxdelivers2.value);
    minPizzasInput3 = parseInt(event.target.minpizzas3.value);
    maxPizzasInput3 = parseInt(event.target.maxpizzas3.value);
    minDeliverInput3 = parseInt(event.target.mindelivers3.value);
    maxDeliverInput3 = parseInt(event.target.maxdelivers3.value);
    minPizzasInput4 = parseInt(event.target.minpizzas4.value);
    maxPizzasInput4 = parseInt(event.target.maxpizzas4.value);
    minDeliverInput4 = parseInt(event.target.mindelivers4.value);
    maxDeliverInput4 = parseInt(event.target.maxdelivers4.value);
    minPizzasInput5 = parseInt(event.target.minpizzas5.value);
    maxPizzasInput5 = parseInt(event.target.maxpizzas5.value);
    minDeliverInput5 = parseInt(event.target.mindelivers5.value);
    maxDeliverInput5 = parseInt(event.target.maxdelivers5.value);
    minPizzasInput6 = parseInt(event.target.minpizzas6.value);
    maxPizzasInput6 = parseInt(event.target.maxpizzas6.value);
    minDeliverInput6 = parseInt(event.target.mindelivers6.value);
    maxDeliverInput6 = parseInt(event.target.maxdelivers6.value);
    calculateTableData(storeId);
    generateTable(storeId);
    return storeId;
  };
}

function calculateTableData(storeId) {
  storeId.pushHourlyData(new HourlyData('8:00 am', minPizzasInput1, maxPizzasInput1, minDeliverInput1, maxDeliverInput1));
  storeId.pushHourlyData(new HourlyData('9:00 am', minPizzasInput1, maxPizzasInput1, minDeliverInput1, maxDeliverInput1));
  storeId.pushHourlyData(new HourlyData('10:00 am', minPizzasInput1, maxPizzasInput1, minDeliverInput1, maxDeliverInput1));
  storeId.pushHourlyData(new HourlyData('11:00 am', minPizzasInput2, maxPizzasInput2, minDeliverInput2, maxDeliverInput2));
  storeId.pushHourlyData(new HourlyData('12 noon', minPizzasInput2, maxPizzasInput2, minDeliverInput2, maxDeliverInput2));
  storeId.pushHourlyData(new HourlyData('1:00 pm', minPizzasInput2, maxPizzasInput2, minDeliverInput2, maxDeliverInput2));
  storeId.pushHourlyData(new HourlyData('2:00 pm', minPizzasInput3, maxPizzasInput3, minDeliverInput3, maxDeliverInput3));
  storeId.pushHourlyData(new HourlyData('3:00 pm', minPizzasInput3, maxPizzasInput3, minDeliverInput3, maxDeliverInput3));
  storeId.pushHourlyData(new HourlyData('4:00 pm', minPizzasInput3, maxPizzasInput3, minDeliverInput3, maxDeliverInput3));
  storeId.pushHourlyData(new HourlyData('5:00 pm', minPizzasInput4, maxPizzasInput4, minDeliverInput4, maxDeliverInput4));
  storeId.pushHourlyData(new HourlyData('6:00 pm', minPizzasInput4, maxPizzasInput4, minDeliverInput4, maxDeliverInput4));
  storeId.pushHourlyData(new HourlyData('7:00 pm', minPizzasInput4, maxPizzasInput4, minDeliverInput4, maxDeliverInput4));
  storeId.pushHourlyData(new HourlyData('8:00 pm', minPizzasInput5, maxPizzasInput5, minDeliverInput5, maxDeliverInput5));
  storeId.pushHourlyData(new HourlyData('9:00 pm', minPizzasInput5, maxPizzasInput5, minDeliverInput5, maxDeliverInput5));
  storeId.pushHourlyData(new HourlyData('10:00 pm', minPizzasInput5, maxPizzasInput5, minDeliverInput5, maxDeliverInput5));
  storeId.pushHourlyData(new HourlyData('11:00 pm', minPizzasInput6, maxPizzasInput6, minDeliverInput6, maxDeliverInput6));
  storeId.pushHourlyData(new HourlyData('12 midnight', minPizzasInput6, maxPizzasInput6, minDeliverInput6, maxDeliverInput6));
  storeId.pushHourlyData(new HourlyData('1:00 am', minPizzasInput6, maxPizzasInput6, minDeliverInput6, maxDeliverInput6));
  return storeId;
};

//create total pizzas sold, push to homepage via DOM
var pizzaOdyssey = document.getElementById('featurenumber');
if (pizzaOdyssey) {
  totalPizzasMade = localStorage.getItem('TotalPizzas');
  if (totalPizzasMade) {
    featurenumber.textContent = totalPizzasMade + ' happy pizza odysseys this week!';
  }
  else {
    featurenumber.textContent = '0 happy pizza odysseys this week!';
  }
}

//listeners
createDataTable.addEventListener('submit', collectDataForTable);

// //COMMENTED OUT ASCII ART
//  _                 _ __ _                              ____
// | | ___   ___ __ _| / _\ |_ ___  _ __ __ _  __ _  ___ / /\ \
// | |/ _ \ / __/ _` | \ \| __/ _ \| '__/ _` |/ _` |/ _ \ |  | |
// | | (_) | (_| (_| | |\ \ || (_) | | | (_| | (_| |  __/ |  | |
// |_|\___/ \___\__,_|_\__/\__\___/|_|  \__,_|\__, |\___| |  | |
//                                           |___/      \_\/_/
