const express = require("express");
const ensureAuthenticated = require("../Middlewares/Auth");
const router = express.Router();

router.get("/", ensureAuthenticated, (req, res) => {
  console.log("----- logged in user detail ---", req.user);

  res.status(200).json([
    {
      name: "mobile",
      price: 1000000,
    },
    {
      name: "tv",
      price: 2000000,
    },
  ]);
});

module.exports = router;
