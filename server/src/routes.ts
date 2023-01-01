const express = require("express");
const router = express.Router();

const controller = require("./controller.ts");

router.post("/randomPhone", controller.randomPhoneNumber);
router.post("/randomEmail", controller.randomEmail);
router.post("/randomParagraphs", controller.randomParagraphs);

router.get("/randomParagraph", controller.randomParagraph);
router.get("/randomEmail", controller.randomEmail);
router.get("/randomName", controller.randomName);

module.exports = router;
