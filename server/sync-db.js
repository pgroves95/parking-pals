const db = require("../models");

db.sequelize.sync({ force: true }).then(() => process.exit(0));