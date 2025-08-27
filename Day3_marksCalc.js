let students = [
    {
        name: "Tia",
        marks: [85, 90, 78] 
    },
    {
        name: "Harsh",
        marks: [92, 88, 95]
    },
    {
        name: "Nishita",
        marks: [79, 80, 92]
    }
];
function calculateTotal(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total;
}
function calculateAverage(marks) {
    return calculateTotal(marks) / marks.length;
}

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let total = calculateTotal(student.marks);
    let average = calculateAverage(student.marks);

    console.log("Student Result:-");
    console.log("Name: " + student.name);
    console.log("Marks: " + student.marks.join(", "));
    console.log("Total: " + total);
    console.log("Average: " + average.toFixed(2));
    console.log("\n");
}
