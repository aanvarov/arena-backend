const express = require("express");
const router = express.Router();
const controllers = require("../controllers/food");
// const multer = require("../configs/multer");

/* GET home page. */
// router.get("/", controllers.fetchAllConfigs);
router.post("/", multer.single("img"), controllers.);
// router.get("/:id", controllers.fetchConfigById);
// router.post("/:id/edit", multer.single("img"), controllers.updateConfigById);
// router.get("/:id/delete", controllers.deleteConfigById);

module.exports = router;
