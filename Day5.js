const express = require("express");
const app = express();
app.use(express.json());
let students = [
  { id: 1, name: "Tia", marks: 85 },
  { id: 2, name: "Harsh", marks: 90 },
  { id: 3, name: "Nishita", marks: 94 }
];
app.get("/students", (req, res) => {
  res.json(students);
});
app.post("/students", (req, res) => {
  const newStudent = req.body; 
  students.push(newStudent);
  res.status(201).json({ message: "Student added!", students });
});
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
