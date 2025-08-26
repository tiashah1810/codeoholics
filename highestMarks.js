function Highest(marks) {
    let max = marks[0]; 
   
    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > max) {
            max = marks[i]; 
        }
    }

    return max; 
}
let studentMarks = [78, 85, 92, 67, 88, 95, 73];
let highest = Highest(studentMarks);

console.log("Student Marks: " + studentMarks);
console.log("Highest Marks: " + highest);
