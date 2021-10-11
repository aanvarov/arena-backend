const express = require("express");

const router = express.Router();
const dayController = require("../controllers/day");

router.get("/findNotClosed", dayController.findNotClosed);
router.post("/", dayController.createDay);

module.exports = router;
