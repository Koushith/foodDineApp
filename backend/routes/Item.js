const express = require("express");
const router = express.Router();
const{ createItem, getAllItems, updateItem, deleteItem, getOneItem } = require("../controller/ItemController");
router.route("/item/create").post(createItem);
router.route("/items").get(getAllItems);
router.route("/item/:id")
      .get(getOneItem)
      .put(updateItem)
      .delete(deleteItem);
module.exports = router;