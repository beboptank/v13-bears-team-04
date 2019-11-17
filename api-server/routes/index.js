const express = require("express");
const router = express.Router();

const posts = require("./posts");
const users = require("./users");

router.use("/", users);
router.use("/posts", posts);

module.exports = router;
