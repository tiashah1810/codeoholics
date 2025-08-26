let student1 = {
    name: "Harsh",
    age: 19,
    course: "Electronics and Computer Engineering",
    rollNo: 25122,

    printDetails: function () {
        console.log("Student Details:-");
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Course: " + this.course);
        console.log("Roll No: " + this.rollNo);
        console.log("\n\n");
    }
};

let student2 = {
    name: "Tia",
    age: 18,
    course: "Computer Engineering",
    rollNo: 21276,

    printDetails: function () {
        console.log("Student Details:-");
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Course: " + this.course);
        console.log("Roll No: " + this.rollNo);
        console.log("\n\n");
    }
};

student1.printDetails();
student2.printDetails();
