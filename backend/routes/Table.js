const express = require("express");
const router = express.Router();
const{ createTable, getAllTables, getOneTable, deleteTable, updateStatus } = require("../controller/TableController");
router.route("/table/create").post(createTable);
router.route("/tables").get(getAllTables);
router.route("/table/:id")
      .get(getOneTable)
      .put(updateStatus)
      .delete(deleteTable)
module.exports = router;