var input = require('readline-sync');
// passenger_name = [];
// total_miles = [];
var passenger_name = input.question('enter your name: ');
// passenger_name.push(name);
var total_miles = parseInt(input.question('enter the total miles: '));
// total_miles.push(miles);
console.log('flyer points: ');
if(total_miles >= 10000 && total_miles < 20000 ){
    point = 10;
    console.log(point);
}
else if(total_miles >= 20000 && total_miles < 50000){
    point = 20;
    console.log(point);
}
else if(total_miles >= 50000 && total_miles < 100000){
    point = 30;
    console.log(point);
}
else if(total_miles >= 100000){
    point = 50;
    console.log(point);
}
