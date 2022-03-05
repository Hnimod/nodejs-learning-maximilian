const path = require("path");
const express = require("express");

const router = express.Router();
const rootPath = require("../utils/rootPath");

router.get("/", (req, res, _next) => {
  res.sendFile(path.join(rootPath, "views", "shop.html"));
});

module.exports = router;
