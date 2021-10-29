const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");

router.get("/", orderController.fetchAllOrders);
router.post("/", orderController.createOrder);
router.patch("/:id", orderController.closeOrder);
router.get("/day/:id", orderController.fetchAllOrdersByDay);
router.get("/:id", orderController.fetchOrderById);
router.patch("/:id/delete", orderController.deleteOrderById);

module.exports = router;
