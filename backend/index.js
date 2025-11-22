require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { requireAuth, requireRole } = require("./middlewares/AuthMiddleware");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Models
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

// Routes
const authRoute = require("./routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

/* ---------- middleware (ONE time, before routes) ---------- */
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"], // add your dashboard port(s)
  credentials: true,
}));
app.use(express.json());      // replaces body-parser for JSON
app.use(cookieParser());

/* ---------- API routes ---------- */
// public example
app.get("/health", (_req, res) => res.json({ ok: true }));

// your data endpoints
app.get("/allHoldings", async (_req, res) => {
  const all = await HoldingsModel.find({});
  res.json(all);
});

app.get("/allPositions", async (_req, res) => {
  const all = await PositionsModel.find({});
  res.json(all);
});

app.get("/allOrders", async (_req, res) => {
  const all = await OrdersModel.find({});
  res.json(all);
});

app.post("/newOrder", async (req, res) => {
  try {
    const order = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await order.save();
    res.send("Order placed successfully");
  } catch (e) {
    console.error(e);
    res.status(500).send("Failed to place order");
  }
});

// auth routes (signup/login/logout,/me,…)
//app.use("/", authRoute);

/* ---------- start server AFTER DB connects ---------- */
(async () => {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log("Server is running on port", PORT));
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
  }
})();
