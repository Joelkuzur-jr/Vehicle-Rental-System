const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Vehicle Rental System Backend is Running!");
});

// API health check
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Vehicle Rental System API is working!"
    });
});

module.exports = app;