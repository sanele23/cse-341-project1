const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

// create two routes
router.get("/", usersController.getSingle);

router.get("/:id", usersController.getSingle);

module.exports = router;
