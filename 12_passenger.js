var passenger = [];
var destination = [];
var input = require('readline-sync');
for (let i = 0; i < 10; i++) {
    var pass = input.question('enter your name: ')
    var dest = input.question('enter the destination: ')
    passenger.push(pass);
    destination.push(dest);    
} 
console.log('array of passengers name: \n');
console.log(passenger);
console.log('array of passengers destination: \n')
console.log(destination);
console.log("merged array: \n")
for (let i = 0; i < destination.length; i++) {
    passenger.push(destination[i]);
    
}
console.log(passenger);