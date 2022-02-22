// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. 
//Then log out each value of the copy indivudally.

const { count } = require("console");

let students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];

studentsCopy = []; // empty field will get copy of students array from fro loop below

for (let count = 3; count < 10; count++) {  //
  studentsCopy[count] = students[count]; // the information is looping because the count. 
}

console.log(studentsCopy);