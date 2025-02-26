/* 
HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 1 to 100.
Any garde less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

Examples
84 round to 85 (85 - 84 is less than 3)
29 do not round (result is less than 38)
57 do not round (60 - 57 is 3 or higher)
*/


function gradingStudents(grades) {
    /* let next;
    for(let i in grades) {
        if(grades[i] >= 38 && grades[i]%5 != 0) {
            next = ((parseInt(grades[i]/5)+1)*5);
            if(next-grades[i] < 3) {
                grades[i] = next;
            }
        }
    }
    return grades; */

    /* let next;
    let newGrades = grades.map((val, i) => {
        if(val >= 38 && val%5 != 0) {
            next = (parseInt(val/5)+1)*5;
            if(next-val<3) {
                return next;
            }
        } 
        return val;
    });
    return newGrades; */

    let next;
    grades.forEach((val, i) => {
        if(val >= 38 && val%5 != 0) {
            next = (parseInt(val/5)+1)*5;
            if(next-val<3) {
                grades[i] = next;
            }
        }
    });
    return grades;
}


const grades1 = [84, 29, 57]; // [85, 29, 57]
console.log(gradingStudents(grades1));

const grades2 = [73, 67, 38, 33, 54]; // [75, 67, 40, 33]
console.log(gradingStudents(grades2));
