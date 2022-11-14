var passenger = [];
new_passenger = [];
var input = require('readline-sync');
// input the name
for (let i = 0; i < 3; i++) {
    var pass = input.question("enter the name: ");
    passenger.push(pass);   
}
console.log(passenger);

// searching of names in array

var psg = 0;
var search = input.question('enter the name: ')
for (let i = 0; i < passenger.length; i++) {
    if(passenger[i] == search){
    //   console.log("hi");
        console.log(`Element found at position ${i+1}`)
        psg = 1;
        break
    }    
}
if(psg == 0){
    console.log("Element not found")
}
// buble sorting
for (let i = 0; i < passenger.length; i++) {
    for (let j = 0; j < passenger.length-i-1; j++) {
        if(passenger[j] > passenger[j+1]){
            var temp = passenger[j]
            passenger[j] = passenger[j + 1]
            passenger[j+1] = temp
        }
    }
    
}
console.log("ascending order of array: \n");
console.log(passenger);

// descending order of array
console.log('descending order of array: ');
for (let i = passenger.length-1; i >= 0; i--) {
    console.log(passenger[i]);
}
// length of names in each element

console.log("Printing names length: ")
passenger.forEach((item)=>{
    process.stdout.write(`${item.length} `)
    console.log()
})

// split the name for each element

console.log("Splitting names")
passenger.forEach((i)=> {
    var new_passenger = i.split(' ')
    new_passenger.forEach((item)=> {
        process.stdout.write(`${item}, `)
    })

})

// duplicate elements
//  for (let i = 0; i < passenger.length; i++) {
//     for (let j = i; j < passenger.length; j++) {
//         if(passenger[j] == passenger[j+1]){
//             if(!(passenger[j] in new_passenger)){
//                new_passenger.push(passenger[j])
//             }
//         }   
//     }
//  }
//  console.log("\n duplicate elements: ");
//  console.log(new_passenger);
var duplicate = [...passenger];
for (let i = 0; i < duplicate.length; i++) {
   for (let j = i+1; j < duplicate.length; j++) {
    if(duplicate[i] == duplicate[j]){       
    }
   }   
}
console.log("\n duplicate elements: ");
console.log(duplicate[i])

