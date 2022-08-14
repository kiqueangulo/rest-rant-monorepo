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
      req.session.userId = user.userId;
      res.status(200).json({ user });
    }
  } catch (error) {
    console.log("Error:", error);
  }
});

router.get("/profile", async (req, res) => {
  console.log(`User ID: ${req.session.userId}`);
  // try {
  //   const user = await User.findOne({
  //     where: { userId: "" },
  //   });
  //   res.json(user);
  // } catch {
  //   res.json(null);
  // }
});

module.exports = router;
