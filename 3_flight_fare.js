var flight_fare = [];
var input = require('readline-sync');
for (let i = 0; i < 5; i++) {
    var flight = parseFloat(input.question("enter the flight fare: "));
    flight_fare.push(flight);
}
console.log("Flight fare: ")
console.log(flight_fare);

// ascending order of array

console.log("ascending order of array: ")
for (let i = 0; i < flight_fare.length; i++) {
    for (let j = 0; j < flight_fare.length-i-1; j++) {
        if(flight_fare[j] > flight_fare[j+1]){
            var temp = flight_fare[j]
            flight_fare[j] = flight_fare[j + 1]
            flight_fare[j+1] = temp
        }
    }    
}
console.log(flight_fare);

// Descending order of array

console.log("\ndescending order of array: ")
for (let i = flight_fare.length-1; i >=0; i--) {
    console.log(flight_fare[i]);
}

// searching flight fare

var flt = 0;
var search = parseFloat(input.question('enter the fare: '))
for (let i = 0; i < flight_fare.length; i++) {
    if(flight_fare[i] == search){
    //   console.log("hi");
        console.log(`Element found at position ${i+1}`)
        flt = 1;
        break
    }    
}
if(flt == 0){
    console.log("Element not found")
}

// Minimum and mazimum flight fares

 var maximum = flight_fare[0];
 var minimum = flight_fare[0];
 for (let i = 1; i < flight_fare.length; i++) {
   if (maximum < flight_fare[i]) {
       maximum = flight_fare[i]
   }
   if (minimum > flight_fare[i]) {
       minimum = flight_fare[i]
   }
} 
console.log("maximum flight fare is " + maximum);
console.log("minimum flight fare is " + minimum);

// Duplicate flight fare

// var dup = []
var duplicate = [...flight_fare];
for (let i = 0; i < duplicate.length; i++) {
   for (let j = i+1; j < duplicate.length; j++) {
    if(duplicate[i] == duplicate[j]){
        console.log(duplicate[i])
    }
   }
    
}
