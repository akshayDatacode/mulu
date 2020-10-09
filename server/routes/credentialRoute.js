const express = require("express")
const credentialController = require("../controllers/credentialController")

const router = express.Router()

router.post("/login", credentialController.login)

module.exports = router
