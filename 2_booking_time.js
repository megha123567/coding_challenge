var input = require('readline-sync');
var booking_time = input.question('enter the time(HH:MM)(AM/PM): ');
var flight_fare = parseInt(input.question('enter the flight fare: '));
console.log(booking_time);
temp = booking_time[booking_time.length-2]
if (temp == 'P' || temp == 'p') {
    hour = parseInt(booking_time[0]+booking_time[1])
    hour += 12
    // console.log(hour)
}
else{
    hour = parseInt(booking_time[0]+booking_time[1])
}
if (hour >= 6 && hour < 9) {
    flight_fare += flight_fare*.1
    console.log("fare increased to: "+flight_fare)
}
else if(hour >= 9 && hour < 17){
    flight_fare += flight_fare*.2
    console.log("fare increased to: "+flight_fare)
}
else if (hour >= 17 && hour <23) {
    flight_fare += flight_fare*.07
    console.log("fare increased to: "+flight_fare)
}
else if (  hour >= 23 || hour < 6) {
    flight_fare += flight_fare*0.05
    console.log("fare increased to: "+flight_fare)
}