const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/get_contacts", userController.getContacts);
router.post("/get_agents", userController.getAgents);
router.post("/get_user_profile", userController.getUserProfile);

module.exports = router;
