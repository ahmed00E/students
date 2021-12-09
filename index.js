const express = require("express");
const app = express();
const PORT = 8000;

const students = [{ name: "Ahmed" }, { name: "Elmutsim" }];

 
 
app.get("/students", (req, res) => {
	res.json({
		status: "OK",
		data: students,
	});
});

app.post("/students", (req, res) => {
	const newStudent = req.body;
	newStudent.id = Math.floor(Math.random() * 10);
	newStudent.created = new Date();

	students.push(newStudent);

	res.json({
		status: "OK",
		message: "Student added successfully :)",
		data: newStudent,
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});