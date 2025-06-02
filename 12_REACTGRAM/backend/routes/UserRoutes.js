const express = require("express")
const router = express.Router()

//Controller
const {register} = require("../controllers/UseController")

//Middlewares
const validate = require("../middlewares/handleValidations")
const {userCreateValidation} = require("../middlewares/userValidations")

//Routes
router.post("/register",userCreateValidation(), validate, register)

module.exports = router