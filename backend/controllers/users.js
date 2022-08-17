const router = require("express").Router();
const db = require("../models");
const BCrypt = require("bcrypt");

const { User } = db;

router.post("/", async (req, res) => {
  try {
    let { password, ...rest } = req.body;
    const user = await User.create({
      ...rest,
      role: "reviewer",
      passwordDigest: await BCrypt.hash(password, 10),
    });

    res.json(user);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = router;
