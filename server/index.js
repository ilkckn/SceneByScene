import "./db/index.js";
import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./utils/errorHandler.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
  }),
  json({ limit: "10mb" }),
  cookieParser()
);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API" });
});

app.use("/users", userRoutes);

app.use(/.*/, (req, res) => {
  res.status(404).json({ message: "Route not found" });
});


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server is 🏃 on port ${PORT}`);
});
