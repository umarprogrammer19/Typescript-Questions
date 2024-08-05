// *Question 62:* Making a Student Template: Create a blueprint for student 
// information, including their name, age, and the classes they're taking, 
// and then fill in this blueprint with an example student.

type Class = {
    name: string;
    grade: number;
};
interface Student {
    name: string;
    age: number;
    classes: Class[];
}
const student: Student = {
    name: 'Umar Farooq',
    age: 18,
    classes: [
        {
            name: 'English',
            grade: 12
        },
        {
            name: 'Math',
            grade: 11
        },
        {
            name: 'Science',
            grade: 12
        }
    ]
};
console.log(student);