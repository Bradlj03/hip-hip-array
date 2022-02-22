// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift,
// and then console.log out each value individually.

let states = ['Michigan', 'Ohio', 'Florida', 'Virginia'];

let newStates = states.unshift('New York', 'New Jersey');

let statesLength = states.length
for (let count = 0; count < statesLength; count++) {
    console.log(states[count]);
    
}