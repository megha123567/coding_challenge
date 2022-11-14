var input = require('readline-sync');
var alphabet = input.question('enter the alphabet: ');
console.log('even numbers: ')
for (let i = 100; i < 110; i+=2){
        console.log(`${alphabet}${i}`);
    }
console.log('odd numbers: ')
for (let i = 101; i < 111; i+=2) {
        console.log(`${alphabet}${i}`);
    
}