const express = require("express");
const router = express.Router();

const controller = require("./controller.ts");

router.post("/randomPhone", controller.randomPhoneNumber);
router.post("/randomEmail", controller.randomEmail);
// router.put("/:id", controller.modifyThings);
// router.delete("/:id", controller.deleteThing);
// router.get("/:id", controller.getOneThing);
router.get("/randomName", controller.randomName);

module.exports = router;
