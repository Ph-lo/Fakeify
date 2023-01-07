const express = require("express");
const router = express.Router();

const controller = require("./controller.ts");

router.post("/randomPhone", controller.randomPhoneNumber);
router.post("/randomEmail", controller.randomEmail);
router.post("/randomParagraphs", controller.randomParagraphs);
router.post("/randomDate", controller.randomDate);
router.post("/randomStringId", controller.randomStringId);
router.post("/randomId", controller.randomId);

router.post("/random", controller.random);

router.get("/randomParagraph", controller.randomParagraph);
router.get("/randomEmail", controller.randomEmail);
router.get("/randomName", controller.randomName);
router.get("/randomFirstname", controller.randomFirstname);
router.get("/randomLastname", controller.randomLastname);
router.get("/randomAddress", controller.randomFullAddress);
router.get("/randomStreet", controller.randomStreet);
router.get("/randomPostcode", controller.randomPostcode);
router.get("/randomCountry", controller.randomCountry);

module.exports = router;
