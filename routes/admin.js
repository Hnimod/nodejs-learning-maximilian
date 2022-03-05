const path = require("path");
const express = require("express");

const router = express.Router();
const rootPath = require("../utils/rootPath");

router.get("/add-product", (req, res, _next) => {
  res.sendFile(path.join(rootPath, "views", "add-product.html"));
});

module.exports = router;
