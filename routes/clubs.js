const express = require("express");
const router = express.Router();

const clubController = require("../controllers/club");

router.get("/", clubController.fetchAllClubs);
router.post("/", clubController.createClub);
router.get("/:id", clubController.fetchClubById);

module.exports = router;
