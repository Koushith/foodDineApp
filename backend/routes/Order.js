const express = require("express");
const router = express.Router();
const{ createOrder, getAllOrders, getOneOrder, updateStatusOfOrder, deleteOrder } = require("../controller/OrderController");
router.route("/order/create").post(createOrder);
router.route("/orders").get(getAllOrders);
router.route("/order/:id")
      .get(getOneOrder)
      .put(updateStatusOfOrder)
      .delete(deleteOrder)
module.exports = router;