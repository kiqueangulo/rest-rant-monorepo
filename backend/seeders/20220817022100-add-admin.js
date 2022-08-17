"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        first_name: "ENRIQUE",
        last_name: "ANGULO",
        email: "enrique@admin.com",
        role: "admin",
        password_digest: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", {
      email: "enrique@admin.com",
    });
  },
};
