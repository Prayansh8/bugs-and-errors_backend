const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors module
const app = express();
const port = 8000;

// Middleware to parse JSON data
app.use(express.json());
app.use(cors()); // Use the cors middleware

// MongoDB connection string
const uri =
  "mongodb+srv://Prayansh811:Prayansh811@cluster0.u7jcnaf.mongodb.net/webapps?retryWrites=true&w=majority"; // Replace with your MongoDB connection string

// Create a Mongoose schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  age: Number,
  role: String,
});

// Create a Mongoose model
const User = mongoose.model("User", userSchema);

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// GET endpoint to retrieve paginated table data
app.get("/items", async (req, res) => {
  try {
    const usersData = await User.find();
    return res.status(200).json({
      success: true,
      users: usersData,
    });
  } catch (error) {
    return res.status(401).json({ success: false, message: "users not found" });
  }
});

// POST endpoint to handle form submission
app.post("/submit", async (req, res) => {
  const formData = req.body;

  // Insert the form data into the MongoDB collection
  const newUser = new User(formData);

  try {
    await newUser.save();
    res.json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error storing data in MongoDB:", error);
    res.status(500).json({ error: "Failed to submit form" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
