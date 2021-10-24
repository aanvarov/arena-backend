const express = require("express");
const router = express.Router();
const controllers = require("../controllers/playstation");

router.get("/", controllers.fetchAllPlaystations);
router.post("/", controllers.createPlaystation);
router.get("/:_id", controllers.fetchPlaystationById);
router.patch("/status/:_id", controllers.updateStatus);
// router.post("/:id/edit", controllers.updateConfigById);
router.get("/:id/delete", controllers.deleteFoodById);

module.exports = router;
