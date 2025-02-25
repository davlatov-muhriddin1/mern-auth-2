const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");

require("dotenv").config();
require("./Models/db");

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://mern-auth-2-liart.vercel.app",
    credentials: true,
  })
);

app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
