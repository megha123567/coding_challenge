var input = require('readline-sync');
var flight_fare = [];
var destination = [];
for (let i = 0; i < 3; i++) {
    var flight = parseFloat(input.question('enter the flight fare: '));
    flight_fare.push(flight);
    var dest = input.question('enter the destination: ');
    destination.push(dest);   
}
console.log(flight_fare);
console.log(destination);
let find = input.question("Enter a number: ");
console.log(`The fare for destination ${destination[find-1]}  is  ${flight_fare[find-1]}`);
