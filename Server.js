const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();

const PORT = process.env.PORT || 5000;



app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Portfolio backend is running",
  });
});

app.use("/api", contactRoutes);


app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});