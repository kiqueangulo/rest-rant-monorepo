const router = require("express").Router();
const db = require("../models");
const BCrypt = require("bcrypt");

const { User } = db;

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    console.log(user);
  } catch (error) {
    console.log("Error:", error);
  }
});

module.exports = router;
