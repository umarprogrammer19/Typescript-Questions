"use strict";
// *Question 57:* Find the Average Grade: Given a list of grades, calculate the average grade.
let grade = [88, 94, 72, 99, 53, 77];
let avgGrade = grade.reduce((total, grade) => total + grade, 0) / grade.length;
console.log(avgGrade);
