// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, 
// try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
var skills = ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT", "TYPESCRIPT"];
// Intentional Error : Not Found The Index Of The Array
// Because Array Started With index of 0 so skills[5] is undefined.
console.log(skills[5]);
// Error Correcting 
console.log(skills[4]);
