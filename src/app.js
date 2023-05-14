import express from "express";

import clientRoutes from "./routes/client.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(express.json());

// Routes
app.use("/", authRoutes);
app.use("/client", clientRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
