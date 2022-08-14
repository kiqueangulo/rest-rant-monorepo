const router = require("express").Router();
const db = require("../models");
const BCrypt = require("bcrypt");

const { User } = db;

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });

    if (
      !user ||
      !(await BCrypt.compare(req.body.password, user.passwordDigest))
    ) {
      res.status(404).json({
        message:
          "Could not find a user with the provided username and password",
      });
    } else {
      res.status(200).json({ user });
    }
  } catch (error) {
    console.log("Error:", error);
  }
});

module.exports = router;
