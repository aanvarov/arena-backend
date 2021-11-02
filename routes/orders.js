const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");

router.get("/", orderController.fetchAllOrders);
router.post("/", orderController.createOrder);
router.patch("/:_id", orderController.closeOrder);
router.get("/byDay/:_id", orderController.fetchAllOrdersByDay);
router.get("/:_id", orderController.fetchOrderById);
router.patch("/:id/delete", orderController.deleteOrderById);

module.exports = router;
