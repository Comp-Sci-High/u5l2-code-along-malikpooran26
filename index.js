const express = require("express");

// import mongoose using require


// (in the terminal) npm i express mongoose


const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});


// create a studentSchema with name, grade, advisory, and fav subject

// connect your schema to a model called Student

// create a route hanlder for /g12 that returns every student in grade 12

// create a route hanlder for /me that returns yourself without using your name

// create a route hanlder for /friend that returns someone at your table using their name

async function startServer() {
  
  // In the SRV string, after the .net/ add myClass (e.g. ...mongodb.net/myClass?appName...)
  await mongoose.connect(
    "mongodb+srv://SE12:CSH2026@cluster12.3ffmh.mongodb.net/mC?appName=Cluster12"
  );

  // before you run your code, uncomment the following and add your info, then the info of a friend
  //   await new ...({...}).save();

  app.listen(3000, () => {
    console.log(`Server is running!`);
  });
}

startServer();
