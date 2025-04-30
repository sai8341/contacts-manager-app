const express = require("express");
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();
router.use(validateToken);

router.get("/", getContacts);

router.post("/", createContact);

router.get("/:id", getContact);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

module.exports = router;
