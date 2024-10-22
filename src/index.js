import express from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});