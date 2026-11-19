
require("dotenv").config();

const express = require("express");
const authRoutes = require("./src/routes/auth");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
