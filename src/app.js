// const express = require("express");
// const { MongoClient } = require("mongodb");
// const mongoose = require("mongoose");
// const serverless = require("serverless-http");

// const app = express();
// const port = 8000;
// const mongoURL =
//   "mongodb+srv://Prayansh811:Prayansh811@cluster0.u7jcnaf.mongodb.net/webapps?retryWrites=true&w=majority";

//   const userSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     email: String,
//     phone: Number,
//     age: Number,
//     role: String,
//   });

//   // Create a Mongoose model
//   const User = mongoose.model("User", userSchema);

// app.get("/items", async (req, res) => {
//   try {
//     const usersData = await User.find();
//     return res.status(200).json({
//       success: true,
//       users: usersData,
//     });
//   } catch (error) {
//     return res.status(401).json({ success: false, message: "users not found" });
//   }
// });

// app.post("/submit", async (req, res) => {
//     const formData = req.body;

//     // Insert the form data into the MongoDB collection
//     const newUser = new User(formData);

//     try {
//       await newUser.save();
//       res.json({ success: true, message: "Form submitted successfully!" });
//     } catch (error) {
//       console.error("Error storing data in MongoDB:", error);
//       res.status(500).json({ error: "Failed to submit form" });
//     }
// });

// MongoClient.connect(mongoURL, (err, client) => {
//   if (err) {
//     console.error("Error connecting to MongoDB:", err);
//     return;
//   }

//   const db = client.db(dbName);

//   // Connect to MongoDB using Mongoose
//   mongoose
//     .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//       console.log("Connected to MongoDB");

//       // Start the Express.js server inside the MongoDB connection callback
//       const handler = serverless(app);
//       module.exports = { handler };

//       app.listen(port, () => {
//         console.log(`Server is running on http://localhost:${port}`);
//       });
//     })
//     .catch((error) => {
//       console.error("Error connecting to MongoDB:", error);
//     });
// });
