// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
let grades = [100, 80, 110, 75, 83, 64];
let arrayLength = grades.length;
let revGrades = grades.reverse();
for (let count = 0; count < arrayLength; count++) {
    console.log(revGrades[count]);
    
}
