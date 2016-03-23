//declare empty global variables here
var totalPizzasMade; // for total pizzas per day across all stores

// big ugly gross global arrays
var hoursOperation = ['8:00am','9:00am','10:00am','11:00am','12 noon','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm','10:00pm','11:00pm','12 midnight','1:00am'];

//functions here to avoid being hoist by my own petard
//random generator including min-max values, actually works (because someone else wrote it)
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//sum of array values - yay for reusing old lab code
var sumArray = function(inputSumArray) {
  var outputSumArray = 0;
  for (var i = 0; i < inputSumArray.length; i++) {
    outputSumArray += inputSumArray[i];
  }
  return outputSumArray;
};

//create function for object constructor - capitalize
function StoreLocation(name){
  this.name = name;
  this.hourlyData = [];
}
