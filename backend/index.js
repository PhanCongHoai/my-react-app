const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const corsConfig = require("./middleware/corsConfig");
const { connectDB } = require("./config/dbConfig");

const authRoute = require("./routes/auth");
// require("./models/AssociationsRelationship");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
// CONNECT DB
connectDB();

// Import route login
const loginRoute = require("./Login");
// MIDDLEWARE
app.use(corsConfig);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("common"));

// ROUTE
app.use("/api/auth", authRoute);

// Khởi động server
app
  .listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(
        `❌ Port ${PORT} is already in use. Please stop the other process or change the port.`
      );
    } else {
      console.error("❌ Server error:", err);
    }
  });
