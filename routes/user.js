const express = require("express");
const Controller = require("../controllers/user");
const router = express.Router();

router.get("/", Controller.list);
router.post("/", Controller.add);
router.patch("/", Controller.edit);
router.delete("/", Controller.delete);

module.exports = router;