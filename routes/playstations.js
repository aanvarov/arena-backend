const express = require("express");
const router = express.Router();
const controllers = require("../controllers/playstation");

/* GET home page. */
router.get("/", controllers.fetchAllFoods);
router.post("/", controllers.createPlaystation);
router.get("/:id", controllers.fetchPlaystationById);
// router.post("/:id/edit", controllers.updateConfigById);
router.get("/:id/delete", controllers.deleteFoodById);

module.exports = router;
