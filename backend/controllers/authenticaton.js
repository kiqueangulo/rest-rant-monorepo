const router = require("express").Router();
const db = require("../models");
const BCrypt = require("bcrypt");

const { User } = db;

router.post("/", async (req, res) => {
  console.log("IN Here");
});

module.exports = router;
