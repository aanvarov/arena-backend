const express = require("express");
const router = express.Router();
const controllers = require("../controllers/food");
// const multer = require("../configs/multer");

/* GET home page. */
router.get("/", controllers.fetchAllFoods);
router.post("/", controllers.createFood);
router.get("/:id", controllers.fetchFoodById);
// router.post("/:id/edit", multer.single("img"), controllers.updateConfigById);
router.get("/:id/delete", controllers.deleteFoodById);

module.exports = router;
