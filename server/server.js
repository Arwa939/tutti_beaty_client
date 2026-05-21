import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import User from "./Models/Usrs.js"
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();   // ✅ THIS IS REQUIRED FIRST

app.use(cors());
app.use(express.json());

// CONNECT DB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// USER SCHEMA
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// REGISTER API
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user exists
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await User.findOne({ name });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
      },
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// LOGIN API مباشرة هنا
app.post("/api/login", async (req, res) => {
  try {
    const { user, password } = req.body;

    const foundUser = await User.findOne({ user });

    if (!foundUser) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    res.json({
      message: "Login successful",
      user: {
        id: foundUser._id,
        user: foundUser.user,
        isAdmin: foundUser.isAdmin,
      },
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});