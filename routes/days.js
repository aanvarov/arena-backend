const express = require("express");

const router = express.Router();
const dayController = require("../controllers/day");

router.post("/", dayController.createNewDay);
router.patch("/closeDay/:_id", dayController.closeDay);

module.exports = router;
