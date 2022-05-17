let grades = [73, 67, 38, 33]
function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i < grades.length; i++) {
        let remainder = grades[i] % 5;
        if (grades[i] >= 38 && remainder >= 3) {
            grades[i] = grades[i] - remainder + 5;
        }
    }
    return grades;
}
console.log(gradingStudents(grades));
