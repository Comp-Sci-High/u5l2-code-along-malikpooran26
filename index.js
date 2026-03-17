const express = require("express");

// import mongoose using require
const mongoose = require("mongoose");
const { type } = require("node:os");

// (in the terminal) npm i express mongoose


const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});


// create a studentSchema with name, grade, advisory, and fav subject
const studentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  grade: {type: Number, required: true, default: 9},
  advisory: {type: String, required: true},
  favSubject: {type: String, default: "No Favorite SUbject"}
})
// connect your schema to a model called Student
const Student = mongoose.model("Student", studentSchema, "Students")
// create a route hanlder for /g12 that returns every student in grade 12
app.get("/g12", async (req, res) => {
  const students = await Student.find({grade: 12})
  res.json(students)
})
// create a route hanlder for /me that returns yourself without using your name
app.get("/me", async (req, res) => {
  const students = await Student.findOne({name: "Malik Pooran"})
  res.json(students)
})
// create a route hanlder for /friend that returns someone at your table using their name

async function startServer() {
  
  // In the SRV string, after the .net/ add myClass (e.g. ...mongodb.net/myClass?appName...)
  await mongoose.connect(
    "mongodb+srv://SE12:CSH2026@cluster12.3ffmh.mongodb.net/myClass?appName=Cluster12"
  );

  // before you run your code, uncomment the following and add your info, then the info of a friend
    // await new Student({
    //   name: "Malik Pooran",
    //   grade: 12,
    //   advisory: "Diamond Dynasty",
    //   favSubject: "Forensics"
    // }).save();

  app.listen(3000, () => {
    console.log(`Server is running!`);
  });
}

startServer();
